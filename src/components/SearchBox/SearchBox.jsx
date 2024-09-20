import css from './SearchBox.module.css';

const SearchBox = ({filter, handleFilterChange}) => {
  return (
      <div className={css.formSearch}>
          <label>Find contacts by name</label>
          <br/>
          <input type="text" name="filter" value={filter} onChange={handleFilterChange}/>
      </div>

  );
};

export default SearchBox;
