import { useCallback, useEffect, useState, memo } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return <input className='search-bar' value={value} onChange={handleChange} />;
}

export default memo(SearchBar);
