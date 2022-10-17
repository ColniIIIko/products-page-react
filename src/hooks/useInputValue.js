import { useCallback, useState } from 'react';

export const useInputValue = (init) => {
  const [value, setValue] = useState(init);

  const handleValue = useCallback((newValue) => setValue(newValue), [setValue]);

  return [value, handleValue];
};
