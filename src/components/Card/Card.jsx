import { memo } from 'react';
import './Card.scss';

const defaultUrl =
  'https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6';

function Card({ name, description, price, color, rating, imageUrl }) {
  return (
    <div className='card'>
      <img className='card__img' src={imageUrl || defaultUrl} alt='good' />
      <h3 className='card__title'>{name}</h3>
      <p className='card__description'>{description}</p>
      <div className='card__info'>
        <span>
          <b>Цена: </b>
          {price}
        </span>
        <span>
          <b>Цвет: </b>
          {color}
          <span style={{ background: color }} className='card__color' />
        </span>
        <span>
          <b>Рейтинг: </b>
          {rating}
        </span>
      </div>
    </div>
  );
}

export default memo(Card);
