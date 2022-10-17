export const sortPriceAsc = {
  type: 'priceASC',
  fn: (lhs, rhs) => lhs.price - rhs.price,
};

export const sortPriceDesc = {
  type: 'priceDESC',
  fn: (lhs, rhs) => rhs.price - lhs.price,
};

export const sortPopular = {
  type: 'popular',
  fn: (lhs, rhs) => rhs.rating - lhs.rating,
};
