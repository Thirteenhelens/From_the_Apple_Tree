const productToEditReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCT_TO_EDIT':
            return action.payload;
        case 'EDIT_PRODUCT':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            };
        case 'EMPTY_EDIT':
            return state = [];
        default:
            return state;
    }
}

export default productToEditReducer;