import classNames from 'classnames';
import styles from './checkout-card.module.scss';

export interface CheckOutCardProps {
    imgUrl?: string;
    productName?: string;
    rating?: string;
    price?: string;
}

export const CheckoutCard = ({ imgUrl, productName, rating, price}: CheckOutCardProps) => {
  return (
    <div className={classNames(styles['checkout-card-container'])}>
        <div className={styles["img-container"]}>
            <img src={imgUrl} alt="" />
        </div>
        <div className={styles["product-content-container"]}>
            <div className={styles["product-name-rating"]}>
                <p className={classNames(styles["product-name"], styles["h3"])}>{productName}</p>
                <p className={classNames(styles["product-rating"], styles["txt-subtitle"])}><span className="material-symbols-outlined">star</span>{rating}</p>
            </div>
            <div className={styles["product-price"]}>
                <div className={styles['price-container']}>
                    <p className={styles['h3']}>${price}</p>
                </div>
            </div>
        </div>
    </div>
  );
};