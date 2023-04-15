
import { IProductDetails } from '@/types/product';
import axios, { AxiosResponse } from 'axios';

export const getProductDetails = (productId: string): Promise<AxiosResponse<IProductDetails>> => {
    return axios.get(`/api/products/${productId}`);
}

export const getProducts = (): Promise<AxiosResponse<{products: Array<IProductDetails>}>> => {
    return axios.get('http://localhost:9999/api/products');
}