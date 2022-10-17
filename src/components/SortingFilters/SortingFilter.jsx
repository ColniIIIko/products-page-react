import './SortingFilter.scss';

function SortingFilter({ title, type, isActive, onChange }) {
  const handleSortClick = () => {
    onChange(type);
  };

  return (
    <div
      onClick={handleSortClick}
      className={`sorting-filter ${isActive ? 'sorting-filter_active' : ''}`}
    >
      <span className='sorting-filter__title'>{title}</span>
    </div>
  );
}

export default SortingFilter;
