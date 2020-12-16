import http from '../interceptor';

export const registerRequest = (data) => http.post('registration', data);

