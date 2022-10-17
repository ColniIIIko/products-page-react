import SortingFilter from './SortingFilter';
import { memo } from 'react';
import './SortingFilter.scss';

function SortingFilters({ activeFilter, onChange }) {
  return (
    <div className='sorting-filters'>
      <SortingFilter
        title={'Сначала дешёвые'}
        type='priceASC'
        isActive={activeFilter === 'priceASC'}
        onChange={onChange}
      />
      <SortingFilter
        title={'Сначала дорогие'}
        type='priceDESC'
        isActive={activeFilter === 'priceDESC'}
        onChange={onChange}
      />
      <SortingFilter
        title={'Сначала популярные'}
        type='popular'
        isActive={activeFilter === 'popular'}
        onChange={onChange}
      />
    </div>
  );
}

export default memo(SortingFilters);
