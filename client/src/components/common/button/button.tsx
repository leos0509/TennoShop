import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  className?: string;
  btnText: string;
  txtClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ className, btnText, txtClass, onClick }: ButtonProps) => {
  return (
    <div className={classNames(styles['btn-container'], className)}>
      <button
        className={classNames(styles['btn-shadow-box'], txtClass)}
        disabled={onClick === undefined}
        onClick={onClick}
      >
        {btnText}
      </button>
      <button className={classNames(styles['main-btn'], txtClass)} onClick={onClick}>
        {btnText}
      </button>
    </div>
  );
};