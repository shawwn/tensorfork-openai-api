# tensorfork-openai-api

## Overview
This package is a tiny node wrapper for the Tensorfork OpenAI API wrapper.

This project is not affiliated with OpenAI and was written purely out of interest.

## Installation

`npm i tensorfork-openai-api`

## Usage

```js
const OpenAI = require('tensorfork-openai-api');
const api = new OpenAI();

(async () => {
  const gptResponse = await api.complete({
    engine: 'davinci',
    prompt: 'Hello, my name is',
    maxTokens: 32,
    temperature: 0.6,
    frequency_penalty: 0.85,
    topP: 1,
    n: 1,
    stream: false,
    stop: ['\n', "testing"],
  });
  
  console.log(gptResponse.data);
})();
```

## Example

For a more complete example, see [here](https://github.com/shawwn/my-writer/blob/master/index.js).

