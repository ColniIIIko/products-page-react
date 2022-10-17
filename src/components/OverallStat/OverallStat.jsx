import { memo } from 'react';
import './OverAllStat.scss';

function OverallStat({ totalCount, showCount }) {
  return (
    <div className='stat'>
      <span>
        <b>Всего товаров:</b>
        {totalCount}
      </span>
      <span>
        <b>Товаров найдено:</b>
        {showCount}
      </span>
    </div>
  );
}

export default memo(OverallStat);
