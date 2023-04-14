import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProductDetails, getProducts } from "../api/products";
import * as mocks from "@/mocks/productsResponse";
import { IProductDetails } from "@/types/product";

interface IProductDetailsPage {
  params: {
    productId: string;
  };
  dataResponse: IProductDetails;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await getProducts();
  // const paths = res.data.map(({id}) => ({
  //   params: { productId: id },
  // }))

  const paths = mocks.productsInDb.map(({ id }) => ({
    params: { productId: id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let dataResponse = {};
  if (params?.productId) {
    //   const res = await getProductDetails(params?.productId as string);
    // dataResponse = res.data ?? {}
    dataResponse =
      mocks.productsInDb.find((el) => el.id === params?.productId) ?? {};
  }

  return {
    props: {
      params,
      dataResponse,
    },
  };
};

const ProductDetails = ({ dataResponse }: IProductDetailsPage) => {
  return <div>{dataResponse.title}</div>;
};

export default ProductDetails;
