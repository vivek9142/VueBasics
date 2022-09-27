export default {
  testAuth(
    state
    // getters, rootState, rootGetters
  ) {
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 3;
  },

  // normalizedCounter(state) {
  //   const finalCounter = state.counter * 3;
  //   if (finalCounter < 0) return 0;
  //   if (finalCounter > 100) return 100;

  //   return finalCounter;
  // },

  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) return 0;
    if (finalCounter > 100) return 100;

    return finalCounter;
  },
};
