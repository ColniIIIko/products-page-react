import { memo } from 'react';
import PriceInput from './PriceInput';
import './PriceFilter.scss';

function PriceFilter({ onChangeMin, onChangeMax }) {
  return (
    <div>
      <h4>По цене</h4>
      <div className='range-filter'>
        <PriceInput placeholder='от' onChange={onChangeMin} />
        <PriceInput placeholder='до' onChange={onChangeMax} />
      </div>
    </div>
  );
}

export default memo(PriceFilter);
