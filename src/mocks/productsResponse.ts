import { IProductDetails } from "@/types/product";

export const productsResponse = [
    {id: "123", title: "Arkham Horror", price: 21.45},
    {id: "234", title: "Wyspa Arnak", price: 21.45},
    {id: "345", title: "Wojna o Pierścień", price: 21.45},
    {id: "456", title: "Listy miłosne", price: 5.00},
];

export const productDetailsResponse = {
    title: "Zaginiona Wyspa Arnak",
    description: "Dobry deckbuiling oraz worker placement",
    price: 134.99,
    id: "123"
}

export const productsInDb: IProductDetails[] = [
    {id: "123", title: "Arkham Horror", price: 21.45, availability: 1, description: "Best LCG", image: "https://test.jpg"},
    {id: "234", title: "Wyspa Arnak", price: 21.45, availability: 1, description: "Best LCG", image: "https://test.jpg"},
    {id: "345", title: "Wojna o Pierścień", price: 21.45, availability: 1, description: "Best LCG", image: "https://test.jpg"},
    {id: "456", title: "Listy miłosne", price: 5.00, availability: 1, description: "Best LCG", image: "https://test.jpg"},
]; 