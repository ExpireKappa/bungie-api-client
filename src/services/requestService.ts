import {config} from "../dev.config";

interface IRequestConfig {
    method: string; // convert to enum
    url: URL
}

// todo: still not happy with this, still causes duplication of code
export const send = (requestConfig: IRequestConfig) => {
    return fetch(requestConfig.url.toString(), {method: requestConfig.method, headers: {"x-api-key": config.apiKey}});
}
