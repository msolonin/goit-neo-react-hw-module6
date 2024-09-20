import css from './SearchBox.module.css';

const SearchBox = ({filterContacts}) => {
  return (
      <div className={css.formSearch}>
          <label>Find contacts by name</label>
          <br/>
          <input type="text" name="filter" onChange={filterContacts}/>
      </div>

  );
};

export default SearchBox;
