const initState = {
    products: null,
};

const ProductData = (state = initState, action) => {
    switch (action.type) {
        case "SETPRODUCTSDATA":
            return {
                ...state,
                products: action.payload,
            };
        case "REMOVEPRODUCTSDATA":
            return {
                ...state,
                products: null
            };
        default:
            return state;
    }
};


export default ProductData;