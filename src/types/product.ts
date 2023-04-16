export interface IProductDetails {
    _id: string;
    title: string;
    description: string;
    price: number;
    imagePath: string;
    availability: number;
    date: string;
}

export interface ICartProducts extends IProductDetails {
    quantity: number;
}