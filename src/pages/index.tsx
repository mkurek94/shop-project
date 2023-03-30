import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ProductCard } from "@/components/Products/ProductCard/ProductCard";
import { GetStaticProps } from "next";
import { getProducts } from "./api/products";
import * as mocks from "@/mocks/productsResponse";
import { IProductDetails } from "@/types/product";

interface IHomePage {
  products: Array<IProductDetails>
}

export const getStaticProps: GetStaticProps = async () => {
  // const res = await getProducts();
  return {
    props: {
      // products: res.data,
      products: mocks.productsResponse
    },
  };
};

export default function Home({products}: IHomePage) {
  return (
    <>
      <main className={styles.main}>
        <h1>My first PWA app</h1>

        <div className={styles.center}>
          {products.map(product => (
            <ProductCard id={product.id} title={product.title} price={product.price} key={product.id}/>
          ))}
        </div>
      </main>
    </>
  );
}
