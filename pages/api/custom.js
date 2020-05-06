export function client(endpoint, { body, ...customConfig }) {
    const baseURL = 'https://api.themoviedb.org/3'
    const token = 123
    const headers = { 'content-Type': 'application/json' };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };
    console.log('config', config);

    if (body) {
        config.body = qs.stringify(body);
    }
    return fetch(`${baseURL}/${endpoint}`, config).then((res) => res.json());
}
