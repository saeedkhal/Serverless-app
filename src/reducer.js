const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return { ...state, products: action.pyload };
    case 'UPDATE_LOADING':
      return { ...state, loading: action.pyload };
    default:
      return state;
  }
};
export default reducer;
