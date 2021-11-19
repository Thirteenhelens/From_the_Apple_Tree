const productToEdit = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCT_TO_EDIT':
            return action.payload;
        default:
            return state;
    }
}

export default productToEdit;