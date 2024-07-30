import classNames from 'classnames';
import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={classNames(styles['footer-container'])}>
        <div className={styles["sitemap"]}>
            <div className={styles["heading"]}>
                <p>Our Site</p>
            </div>
            <div className={styles["menu"]}>
                <a>Home</a>
                <a>Your Library</a>
                <a>My Blog</a>
            </div>
        </div>
        <div className={styles['contact']}>
            <div className={styles["heading"]}>
                <p>Contact</p>
            </div>
            <div className={styles["menu"]}>
                <p>Contact information :</p>
                <p>Phone number: 0983053410</p>
                <p>Email: baopham.201015@gmail.com</p>
                <p>LinkedIn: leosthedesigner</p>
            </div>
        </div>
    </div>
  );
};