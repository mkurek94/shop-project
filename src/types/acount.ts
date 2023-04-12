import { IOrder } from "./order";

export interface IAccount {
    userId: string;
    avatarUrl: string;
    email: string;
    password: string;
    name: string;
    orders: IOrder[];
    address: IAddress;
}

export interface IAddress {
    postalCode: string;
    address: string;
    country: string;
    city: string;
}

export interface IShippingAddress extends IAddress {
    type: string;
    code?: string;
}