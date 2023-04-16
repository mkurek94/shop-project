export interface IProductDetails {
    _id: string;
    title: string;
    description: string;
    price: number;
    imagePath: string;
    availability: number;
}

export interface ICartProducts extends IProductDetails {
    quantity: number;
}