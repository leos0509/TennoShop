import classNames from 'classnames';
import styles from './category-button.module.scss';
import '../../../global.scss';

export interface CategoryButtonProps {
    className?: string;
}

export const CategoryButton = ({ className }: CategoryButtonProps) => {
    return (
        <div className={classNames(styles.root, className, 'btn-container')}>
            <button className={classNames(styles['category-btn'], styles['txt-button-sml'])}>All</button>
            <button className={classNames(styles['category-btn'], styles['txt-button-sml'])}>Course</button>
            <button className={classNames(styles['category-btn'], styles['txt-button-sml'])}>Add-on</button>
            <button className={classNames(styles['category-btn'], styles['txt-button-sml'])}>Others</button>
        </div>
    );
};
