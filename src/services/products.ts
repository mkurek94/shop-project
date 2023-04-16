
import { IProductDetails, IProduct } from '@/types/product';
import axios, { AxiosResponse } from 'axios';

export const getProductDetails = (productId: string): Promise<AxiosResponse<IProductDetails>> => {
    return axios.get(`http://localhost:9999/api/products/${productId}`);
}

export const getProducts = (): Promise<AxiosResponse<{products: Array<IProduct>}>> => {
    return axios.get('http://localhost:9999/api/products');
}