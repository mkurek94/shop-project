import { IShippingAddress } from "./acount";
import { ICartItem } from "./cart";

export type IPaymentMethod = "creditCard" | "payU";

export interface IOrder {
    orderId: string;
    orderDate: string;
    price: number;
    orderItems: ICartItem[];
    shippingAddress: IShippingAddress;
    description?: string;
    paymentMethod: IPaymentMethod;
}