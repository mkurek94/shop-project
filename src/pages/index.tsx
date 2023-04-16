import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ProductCard } from "@/components/Products/ProductCard/ProductCard";
import { GetStaticProps } from "next";
import { IProductDetails } from "@/types/product";
import bannerImage from "../assets/images/banner.webp";
import social01 from "../assets/images/social01.jpg";
import social02 from "../assets/images/social04.jpg";
import social03 from "../assets/images/social03.webp";
import social04 from "../assets/images/social04.jpg";
import social05 from "../assets/images/social05.jpg";
import social06 from "../assets/images/social01.jpg";
import { getProducts } from "@/services/products";

interface IHomePage {
  products: Array<IProductDetails>;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await getProducts();
  return {
    props: {
      products: res.data.products,
    },
  };
};

export default function Home({ products }: IHomePage) {
  return (
    <>
      <main className={styles.main}>
        <Image src={bannerImage} alt="banner image" className={styles.bannerImage}/>
        <div className={styles.recentlyAdded}>
          <h2>Recently added</h2>
          <div className={styles.cardsContainer}>
            {products.map((product) => (
              <ProductCard
                id={product._id}
                title={product.title}
                price={product.price}
                key={product._id}
                imagePath={product.imagePath}
              />
            ))}
          </div>
          <button>View all products</button>
        </div>
        <div className={styles.socialMedia}>
          <h3>#HASHTAG</h3>
          <div className={styles.socialMediaImageContainer}>
            <Image alt="socialMedia picture 1" src={social01} className={styles.socialMediaImage}/>
            <Image alt="socialMedia picture 2" src={social02} className={styles.socialMediaImage}/>
            <Image alt="socialMedia picture 3" src={social03} className={styles.socialMediaImage}/>
            <Image alt="socialMedia picture 4" src={social04} className={styles.socialMediaImage}/>
            <Image alt="socialMedia picture 5" src={social05} className={styles.socialMediaImage}/>
            <Image alt="socialMedia picture 6" src={social06} className={styles.socialMediaImage}/>
          </div>
        </div>
      </main>
    </>
  );
}
