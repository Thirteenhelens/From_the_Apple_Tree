const productsToCompare = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_COMPARE':
            return [...state, action.payload];
        case 'REMOVE_FROM_COMPARE':
            return state.splice(1, 1, action.payload);
            // Almost works, only the second item is ever removed though - needs fix!!!
        default:
            return state;
    }
}

export default productsToCompare;