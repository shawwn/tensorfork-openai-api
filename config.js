const DEFAULT_ENDPOINT = 'https://api.openai.com';
const DEFAULT_ENGINE = 'davinci';
const ENGINE_LIST = ['ada', 'babbage', 'curie', 'davinci'];

module.exports = {
    listURL: (endpoint) => {
        if (!endpoint) {
            endpoint = DEFAULT_ENDPOINT;
        }
        return `${endpoint}/v1/engines`;
    },
    completionURL: (engine, endpoint) => {
        if (!engine) {
            engine = DEFAULT_ENGINE;
        }
        if (!endpoint) {
            endpoint = DEFAULT_ENDPOINT;
        }
        return `${endpoint}/v1/engines/${engine}/completions`;
    },
}