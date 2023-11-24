import React, { createContext, useState } from 'react'

export const ProductContext = createContext();

export const NewsProvider = (props) => {
    const { children } = props;
    const [product, setProduct] = useState([])
    return (
        <ProductContext.Provider value={(product, setProduct)}>
            {children}
        </ProductContext.Provider>
    )
}


