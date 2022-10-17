import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';

function PriceInput({ placeholder, onChange }) {
  const [value, setValue] = useState();
  const debouncedValue = useDebounce(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <input
      onChange={handleChange}
      type='number'
      placeholder={placeholder}
      className='range-filter__start range-filter__input'
    />
  );
}

export default PriceInput;
