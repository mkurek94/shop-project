export interface IProduct {
  _id: string;
  title: string;
  price: number;
  imagePath: string;
}

export interface IProductDetails extends IProduct {
    availability: number;
    date: string;
    description: string;
  }

export interface ICartProducts extends IProductDetails {
  quantity: number;
}
