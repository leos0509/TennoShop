import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './navigaton-bar.module.scss';
import '../../../global.scss';
import { Button } from '../button/button';
import { Link } from 'react-router-dom';

export interface NavigatonBarProps {
    className?: string;
}

export const NavigatonBar = ({ className }: NavigatonBarProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['nav-bar']}>
                <div className={styles['btn-collection']}>
                    <div className='logo-container'>
                        <Link to="/" className={styles["logo"]}>
                            {/* <Button btnText="TENNO SHOP" txtClass='txt-button'/> */}
                            <img src="src/assets/Logo.svg" alt="" />
                        </Link>
                    </div>
                    <Link to="/">
                        <Button btnText="Home" txtClass='txt-button'/>
                    </Link>
                    <Button btnText="Library" txtClass='txt-button'/>
                    <Button btnText="Blog" txtClass='txt-button'/>
                </div>
                <div className={styles['btn-collection']}>
                    {isLoggedIn ? (
                        <Link to="/login">
                            <Button btnText="Logout" txtClass='txt-button' onClick={handleLogout}/>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <Button btnText="Login" txtClass='txt-button' onClick={handleLogin}/>
                        </Link>
                    )}
                    <Link to="/cart">
                        <Button btnText="Cart" txtClass='txt-button'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};