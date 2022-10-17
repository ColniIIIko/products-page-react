import { memo } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
function Cards({ cards }) {
  return (
    <div className='cards'>
      {cards.length ? (
        cards.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <p className='cards__empty'>По заданным фильтрам ничего не найдено</p>
      )}
    </div>
  );
}

export default memo(Cards);
