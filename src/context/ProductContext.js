import { createContext, useContext } from "react";
import { Products } from "../data";
import { useState } from "react";

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  /**Single Page  Product */

  const SingleProduct = (id) => {
    return Products.find((product) => product.id == id);
  };

  const [imagePreview, setImagePreview] = useState("0");

  const ImageOnClick = (event) => {
    let imageSrc = event.target.getAttribute("src");
    setImagePreview(imageSrc);
  };

  /**Single Page  Product End */

  const DealOfWeekProducts = Products.filter((product) => product.deal);
  const FeaturedProducts = Products.filter((product) => product.featured);
  const NewProducts = Products.filter((product) => product.tag === "new");
  const tempPopularProducts = [...Products];
  const tempTopRatingProducts = [...Products];

  /** */

  const TopRatingProducts = (a, b) => {
    return b.rating - a.rating;
  };
  const PopularProducts = (a, b) => {
    return b.views - a.views;
  };

  const newPopularProducts = tempPopularProducts.sort(TopRatingProducts);
  const newTopProduct = tempTopRatingProducts.sort(PopularProducts);

  const value = {
    DealOfWeekProducts,
    FeaturedProducts,
    NewProducts,
    newPopularProducts,
    newTopProduct,
    SingleProduct,
    imagePreview,
    setImagePreview,
    ImageOnClick,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const UseProductContext = () => {
  return useContext(ProductContext);
};
