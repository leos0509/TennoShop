import styles from "./cart-page.module.scss"
import { NavigatonBar } from "../../common/navigaton-bar/navigaton-bar";
import { CheckoutCard } from "../../common/checkout-card/checkout-card";
import { Footer } from "../../common/footer/footer";
import classNames from "classnames";

export const CartPage = () => {
    return (
        <div className={styles["cart-page"]}>
            <NavigatonBar />
            <div className={styles["checkout-section"]}>
                <div className={styles["product-display"]}> 
                    <div className={styles["heading"]}>
                        <p className={styles["h1"]}>Check Out</p>
                    </div>
                    <CheckoutCard imgUrl='https://public-files.gumroad.com/i4wd4uycatakd1qrwbkdmaf0mcqm' productName='GIRL PSYCHO 100 ZINE' rating='4.9' price='10.000'/>
                    <CheckoutCard imgUrl='https://public-files.gumroad.com/y126u5r2g0nzhaydzg2lysgqu8ej' productName='[Addon]MACHIN3tools' rating='4.9' price='50.000'/>
                    <CheckoutCard imgUrl='https://public-files.gumroad.com/wpzexcdsrrnpe3vb3kh9rjikhvny' productName='BagaPie Modifier' rating='4.9' price='20.000'/>
                    <CheckoutCard imgUrl='https://public-files.gumroad.com/pzkeudqq2o5fdurbyt894yexyiwv' productName='Learn how to CREATE a CUTE KITCHEN"' rating='4.9' price='100.000'/>
                </div>
                <div className={styles["receipt-container"]}>
                    <div className={styles["heading"]}>
                        <p className={styles["h1"]}>Receipt</p>
                    </div>
                    <div className={styles["receipt-content"]}>
                        <div className={styles["product-count"]}>
                            <p className={styles["receipt-heading"]}>Product</p>
                            <div className={classNames(styles["row"], styles["indv-prd-count"])}>
                                <p>GIRL PSYCHO 100 ZINE</p>
                                <p>10.000</p>
                            </div>
                            <div className={classNames(styles["row"], styles["indv-prd-count"])}>
                                <p>[Addon]MACHIN3tools</p>
                                <p>50.000</p>
                            </div>
                            <div className={classNames(styles["row"], styles["indv-prd-count"])}>
                                <p>BagaPie Modifier</p>
                                <p>20.000</p>
                            </div>
                            <div className={classNames(styles["row"], styles["indv-prd-count"])}>
                                <p>Learn how to CREATE a CUTE KITCHEN</p>
                                <p>100.000</p>
                            </div>
                            <div className={classNames(styles["row"], styles["total-count"])}>
                                <p>Total</p>
                                <p>180.000</p>
                            </div>
                        </div>
                        <div className={styles["horizontal-div"]}></div>
                        <div className={styles["discount"]}>
                            <p className={styles["receipt-heading"]}>Discount</p>
                            <input type="search" placeholder="Enter Code" className={classNames(styles["discount-input"], styles["txt-button-sml"])}/>
                        </div>
                        <form action="/create-payment-link" method="post">
                            <div className={styles["button-container"]}>
                                <button className={styles["h2"]}>Buy Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}