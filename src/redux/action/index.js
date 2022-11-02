
export const addToCart = (product) => {
    return {
        type: "ADDPRODUCT",
        payload: product
    }
}

export const delProduct = (product) => {
    return {
        type: "DELETEPRODUCT",
        payload: product
    }
}