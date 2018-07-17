import { AUTH_TOKEN } from './../constants/auth';

export function assignHeader(): {

} {
    let headers: {
        'headers': {
            Authorization: string,
            "Content-Type": string;
        };
    } = {
            'headers': {
                Authorization: "Bearer " + AUTH_TOKEN,
                'Content-Type': 'application/json'
            }
        };
    return headers;
}
