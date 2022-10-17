import { useCallback, useMemo, useState } from 'react';
import Cards from './components/Cards/Cards';
import ColorsFilter from './components/Filters/ColorsFilter';
import PriceFilter from './components/Filters/PriceFilter';
import SearchBar from './components/SearchBar/SearchBar';
import SortingFilters from './components/SortingFilters/SortingFilters';
import { useInputValue } from './hooks/useInputValue';
import { generateGoods } from './utils/goodGenerator';
import OverallStat from './components/OverallStat/OverallStat';

import './styles.scss';

function App({ filters, sortingOptions }) {
  const [goods] = useState(generateGoods(100));
  const [priceMin, handlePriceMin] = useInputValue(0);
  const [priceMax, handlePriceMax] = useInputValue(0);
  const [search, handleSearch] = useInputValue('');

  const [colors, setColors] = useState([]);
  const handleColors = useCallback(
    (color) => {
      setColors(
        colors.includes(color)
          ? colors.filter((currColor) => currColor !== color)
          : [...colors, color]
      );
    },
    [colors]
  );

  const [sorting, setSorting] = useState('priceASC');
  const handleSort = useCallback(
    (sortType) => {
      sortType !== sorting && setSorting(sortType);
    },
    [sorting]
  );

  const config = useMemo(() => {
    return {
      priceMin,
      priceMax,
      search,
      colors,
    };
  }, [priceMin, priceMax, search, colors]);

  const filterCallback = useCallback(
    (good) => filters.every((filter) => filter(good, config)),
    [filters, config]
  );
  const sortCallback = useCallback(
    (lhs, rhs) =>
      sortingOptions.find((option) => option.type === sorting).fn(lhs, rhs),
    [sortingOptions, sorting]
  );

  const currentColors = useMemo(
    () => [...new Set(goods.map((good) => good.color))],
    [goods]
  );

  const goodsToDisplay = useMemo(
    () => goods.filter(filterCallback).sort(sortCallback),
    [filterCallback, sortCallback, goods]
  );

  return (
    <main>
      <SearchBar onSearch={handleSearch} />
      <section className='content'>
        <div className='filters'>
          <SortingFilters activeFilter={sorting} onChange={handleSort} />
          <ColorsFilter colors={currentColors} onChange={handleColors} />
          <PriceFilter
            onChangeMax={handlePriceMax}
            onChangeMin={handlePriceMin}
          />
          <OverallStat
            totalCount={goods.length}
            showCount={goodsToDisplay.length}
          />
        </div>
        <Cards cards={goodsToDisplay} />
      </section>
    </main>
  );
}

export default App;
