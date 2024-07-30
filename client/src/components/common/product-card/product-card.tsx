import classNames from 'classnames';
import styles from './product-card.module.scss';

export interface ProductCardProps {
    imgUrl?: string;
    productName?: string;
    rating?: string;
    price?: string;
}

export const ProductCard = ({ imgUrl, productName, rating, price}: ProductCardProps) => {
  return (
    <div className={classNames(styles['product-card-container'])}>
        <div className={styles["img-container"]}>
            <img src={imgUrl} alt="" />
        </div>
        <div className={styles["product-content-container"]}>
            <div className={styles["product-name-rating"]}>
                <p className={classNames(styles["product-name"], styles["h2"])}>{productName}</p>
                <p className={classNames(styles["product-rating"], styles["txt-sml"])}><span className="material-symbols-outlined">star</span>{rating}</p>
            </div>
            <div className={styles["product-price-button"]}>
                <div className={styles['price-container']}>
                    <p className={styles['h2']}>{price}VND</p>
                </div>
                <div className={styles['button-container']}>
                    <button className={styles['h2']}>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  );
};