import { productsInDb } from "@/mocks/productsResponse";

export const getProductDetails = (productId: string) => {
    return productsInDb.find(product => product.id === productId);
}