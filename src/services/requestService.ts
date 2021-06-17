import {config} from "../dev.config";

export class RequestService {

    private formatUrl(requestUrl: string, queryParams: Array<Array<string>>): string {
        const url = new URL(requestUrl);
        queryParams.map(param => url.searchParams.append(param[0], param[1]))
        return url.toString();
    }

    public get(requestUrl: string, queryParams: Array<Array<string>>) {
        const url = this.formatUrl(requestUrl, queryParams);
        return fetch(url, {method: "GET", headers: {"x-api-key": config.apiKey}});
    }

    public post(requestUrl: string, queryParams: Array<Array<string>>) {
        const url = this.formatUrl(requestUrl, queryParams);
        return fetch(url, {method: "POST", headers: {"x-api-key": config.apiKey}});
    }


}


