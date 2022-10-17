export const filterByColor = (good, config) =>
  !config.colors.length || config.colors.includes(good.color);

export const filterByPrice = (good, config) =>
  Boolean(
    good.price >= (config.priceMin || 0) &&
      good.price <= (config.priceMax || Infinity)
  );

export const filterByName = (good, config) =>
  Boolean(
    good.name.toLowerCase().includes(config.search.toLowerCase()) ||
      good.description.toLowerCase().includes(config.search.toLowerCase())
  );
