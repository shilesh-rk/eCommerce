// For ADD Item to Cart

export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload : product
    }
}
// For DELETE Item from Cart

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}