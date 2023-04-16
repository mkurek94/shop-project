import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProductDetails, getProducts } from "../../services/products";
import { IProductDetails } from "@/types/product";
import styles from "../../styles/Product.module.css";

interface IProductDetailsPage {
  params: {
    productId: string;
  };
  dataResponse: IProductDetails;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getProducts();
  const paths = res.data.products.map(({_id}) => ({
    params: { productId: _id },
  }))
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let dataResponse = {};
  if (params?.productId) {
    const res = await getProductDetails(params?.productId as string);
    dataResponse = res.data ?? {}
  }

  return {
    props: {
      params,
      dataResponse,
    },
  };
};

const ProductDetails = ({ dataResponse, params }: IProductDetailsPage) => {
  return (
    <div className={styles.container}>
      <h1>{dataResponse.title}</h1>
    </div>
  );
};

export default ProductDetails;
