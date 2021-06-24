import {config} from "../../dev.config";
import {HttpClientConfig} from "bungie-api-ts/http";

interface IRequestConfig {
    method: string;
    url: URL
}

// todo: remove export once all methods are converted over to api helpers
export const send = (requestConfig: IRequestConfig) => {
    return fetch(requestConfig.url.toString(), {method: requestConfig.method, headers: {"x-api-key": config.apiKey}});
}

export const http = (httpConfig: HttpClientConfig): Promise<any> => {
    const url = new URL(httpConfig.url);
    for (let key in httpConfig.params) {
        url.searchParams.append(key, httpConfig.params[key]);
    }

    return send({url: url, method: httpConfig.method});
}

