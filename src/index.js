import { createRoot } from 'react-dom/client';
import { filterByColor, filterByPrice, filterByName } from './utils/filterBy';
import { sortPriceAsc, sortPriceDesc, sortPopular } from './utils/sortingBy';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App
    filters={[filterByColor, filterByName, filterByPrice]}
    sortingOptions={[sortPriceAsc, sortPriceDesc, sortPopular]}
  />
);
