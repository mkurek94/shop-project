export interface IProductDetails {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    availability: number;
}

export interface ICartProducts extends IProductDetails {
    quantity: number;
}