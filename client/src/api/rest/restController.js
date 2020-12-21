import http from '../interceptor';

export const registerRequest = (data) => http.post('registration', data);
export const loginRequest = (data) => http.post('login', data);
export const getUser = () => http.get('user');
export const createProduct = (data) => http.post('product', data);
export const updateProduct= (data, id) => http.patch(`product/${id}`, data);
export const deleteProduct = (id) => http.delete(`product/${id}`);
export const getProducts = (data) => http.post('products', data);
export const getProductById = (id) => http.get(`product/${id}`);