import classNames from 'classnames';
import styles from './search-bar.module.scss';

export const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <input type="search" placeholder="Search" className={classNames(styles["search-input"], styles["txt-button-sml"])}/>
      <button className={styles["search-icon"]}>
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};