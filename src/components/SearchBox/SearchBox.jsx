import css from './SearchBox.module.css';
import {useDispatch, useSelector} from "react-redux";
import {changeFilter, selectNameFilter} from "../../redux/filtersSlice.js";

const SearchBox = () => {
    const name = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const handleFilterChange = (event) => {
        dispatch(changeFilter(event.target.value));
    }
    return (
      <div className={css.formSearch}>
          <label>Find contacts by name</label>
          <br/>
          <input type="text" name="filter" value={name} onChange={handleFilterChange}/>
      </div>
    );
};

export default SearchBox;
