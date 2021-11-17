const productsToCompare = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_COMPARE':
            return [...state, action.payload];
        case 'REMOVE_FROM_COMPARE':
            // return state.splice(1, 1, action.payload);
            return state.filter(selectedProduct => action.payload.id !== selectedProduct.id);

        default:
            return state;
    }
}

export default productsToCompare;