import user from './user.reducer';
import errors from './errors.reducer';
import compare from './compare.reducer';
import { combineReducers } from 'redux';
import products from './products.reducer';
import favorites from './favorites.reducer';
import productToEdit from './productToEdit.reducer';


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  user, // will have an id and username if someone is logged in
  errors, // contains registrationMessage and loginMessage
  compare,
  products,
  favorites,
  productToEdit,
});

export default rootReducer;
