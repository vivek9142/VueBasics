import { createStore } from 'vuex';

import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
});

export default store;
