const productToEditReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_TO_EDIT':
            return action.payload;
        default:
            return state;
    }
}

export default productToEditReducer;