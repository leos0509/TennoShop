import { useState } from 'react';
import classNames from 'classnames';
import styles from './login-page.module.scss';
import { NavigatonBar } from '../../common/navigaton-bar/navigaton-bar';
import { Footer } from '../../common/footer/footer';
import axios from 'axios'; // Import axios

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        try {
            // Using axios for the POST request
            const response = await axios.post('http://localhost:3000/login', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    return (
        <div className={styles.root}>
            <NavigatonBar />
            <div className={styles["login-container"]}>
                <div className={styles["login-content"]}>
                    <div className={classNames(styles["login-heading"], styles["h1"])}>
                        <p>Login</p>
                    </div>
                    <form className={styles["login-form"]} onSubmit={handleSubmit}>
                        <p className={classNames(styles["input-heading"], styles["txt-button-sml"])}>Email:</p>
                        <input type="email" placeholder="Email" className={classNames(styles["login-input"], styles["txt-button-sml"])} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className={classNames(styles["input-heading"], styles["txt-button-sml"])}>Password:</p>
                        <input type="password" placeholder="Password" className={classNames(styles["login-input"], styles["txt-button-sml"])} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className={styles["button-container"]}>
                            <button className={styles["h2"]} type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
