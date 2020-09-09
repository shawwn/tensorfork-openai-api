"use strict";

const config = require('./config');
const axios = require('axios');

const OPENAI_ENDPOINT = "https://api.openai.com";
const TENSORFORK_ENDPOINT = "http://test.tensorfork.com:9000"

class OpenAI {
    constructor(api_key, endpoint) {
        this.api_key = api_key || "stub";
        //this.endpoint = endpoint || OPENAI_ENDPOINT;
        this.endpoint = endpoint || TENSORFORK_ENDPOINT;
    }

    _safe_cast(number) {
        return number ? Number(number) : null;
    } 

    _send_request(url, opts) {
    }

    list_engines() {
        const url = config.listURL(this.endpoint);
        const reqOpts = {
            headers: {
                'Authorization': `Bearer ${this.api_key}`,
                'Content-Type': 'application/json'
            }
        };
        return axios.get(url, reqOpts);
    }

    complete(opts) {
        let engine = opts.engine
        if (this.endpoint !== OPENAI_ENDPOINT) {
          if (engine === 'davinci' || engine === 'curie' || engine == null) {
            engine = '1558M'
          }
        }
        const url = config.completionURL(engine, this.endpoint);
        const reqOpts = {
            headers: {
                'Authorization': `Bearer ${this.api_key}`,
                'Content-Type': 'application/json'
            }
        };
        const data = {
            prompt: opts.prompt,
            max_tokens: this._safe_cast(opts.maxTokens),
            temperature: this._safe_cast(opts.temperature),
            top_p: this._safe_cast(opts.topP),
            frequency_penalty: this._safe_cast(opts.frequency_penalty),
            n:  this._safe_cast(opts.n),
            stream: opts.stream,
            stop: opts.stop,
            echo: !!opts.echo,
        };
        return axios.post(url, data, reqOpts);
    }
}

module.exports = OpenAI;
