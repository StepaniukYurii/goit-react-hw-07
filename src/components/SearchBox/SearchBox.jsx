import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label} htmlFor="search">
        Find contact by name
      </label>
      <input
        className={styles.SearchBox}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
