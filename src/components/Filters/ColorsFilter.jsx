import { memo } from 'react';
import './ColorsFilter.scss';

function ColorsFilter({ colors, onChange }) {
  return (
    <div>
      <h4>По цвету</h4>
      <div className='checkbox-filter'>
        {colors.map((color, index) => (
          <div key={index}>
            <input
              className='checkbox-filter__input'
              type='checkbox'
              onChange={() => onChange(color)}
              id={color}
            />
            <label htmlFor={color} className='checkbox-filter__label'>
              {color}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ColorsFilter);
