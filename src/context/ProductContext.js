import { createContext, useContext } from "react";
import { Products } from "../data";


const ProductContext = createContext();


export const ProductContextProvider = ({ children }) => {

    const FeaturedProducts = Products.filter((product) => product.featured);
    const NewProducts = Products.filter((product) => product.tag === "new");
    const tempPopularProducts = [...Products];
    const tempTopRatingProducts = [...Products];

    const TopRatingProducts = (a, b) => {
        return b.rating - a.rating;
    };
    const PopularProducts = (a, b) => {
        return b.views - a.views;
    };


    const newPopularProducts = tempPopularProducts.sort(TopRatingProducts);
    const newTopProduct = tempTopRatingProducts.sort(PopularProducts);



    const value = {
        FeaturedProducts,
        NewProducts,
        newPopularProducts,
        newTopProduct,

    };

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )

}



export const UseProductContext = () => {
    return useContext(ProductContext);
}