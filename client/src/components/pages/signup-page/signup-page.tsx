import { useState } from 'react';
import classNames from 'classnames';
import styles from './signup-page.module.scss';
import { NavigatonBar } from '../../common/navigaton-bar/navigaton-bar';
import { Footer } from '../../common/footer/footer';
// import { Link } from 'react-router-dom';

export const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    return (
        <div className={styles.root}>
            <NavigatonBar />
            <div className={styles["signup-container"]}>
                <div className={styles["signup-content"]}>
                    <div className={classNames(styles["signup-heading"], styles["h1"])}>
                        <p>Signup</p>
                    </div>
                    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
                        <p className={classNames(styles["input-heading"], styles["txt-button-sml"])}>Email:</p>
                        <input type="email" placeholder="Email" className={classNames(styles["signup-input"], styles["txt-button-sml"])} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className={classNames(styles["input-heading"], styles["txt-button-sml"])}>Password:</p>
                        <input type="password" placeholder="Password" className={classNames(styles["signup-input"], styles["txt-button-sml"])} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className={styles["button-container"]}>
                            <button className={styles["h2"]} type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
