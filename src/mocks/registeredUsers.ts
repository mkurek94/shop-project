import { IAccount, IAddress } from "@/types/acount";
import { IOrder } from "@/types/order";

export const MOCK_ADDRESS: IAddress = {
    address: "Sambora 22/3",
    city: "Puck",
    postalCode: "84-100",
    country: "Poland",
}

export const MOCK_ORDERS: IOrder[] = [
  {
    orderDate: Date.now().toString(),
    orderId: "orderId123452",
    paymentMethod: "creditCard",
    price: 312.99,
    description: "Great job!",
    shippingAddress: {
      address: "Central Perk 12",
      city: "New York",
      postalCode: "12345",
      country: "United States",
      type: "mail",
    },
    orderItems: [
      { id: "123", price: 21.45, quantity: 2 },
      { id: "234", price: 21.45, quantity: 3 },
    ],
  },
];

export const REGISTERED_USERS: IAccount[] = [
  {
    userId: "123",
    name: "Test",
    password: "Test",
    email: "test@test.com",
    address: MOCK_ADDRESS,
    orders: MOCK_ORDERS,
    avatarUrl: "avatarpath.png",
  },
];
