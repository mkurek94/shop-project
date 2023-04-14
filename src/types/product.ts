export interface IProductDetails {
    id: string;
    title: string;
    description: string;
    price: number;
    imagePath: string;
    availability: number;
}

export interface ICartProducts extends IProductDetails {
    quantity: number;
}