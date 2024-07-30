import classNames from 'classnames';
import { CategoryButton } from '../../common/category-button-group/category-button';
import { NavigatonBar } from '../../common/navigaton-bar/navigaton-bar';
import { SearchBar } from '../../common/search-bar/search-bar';
import { ProductCard } from '../../common/product-card/product-card';
import { Footer } from '../../common/footer/footer';
import styles from './home-page.module.scss';
import '../../../global.scss'

export const HomePage = () => {
  
  return (
    <div className={styles["homepage"]}>
        <NavigatonBar /> 
        <div className={styles["hero-section"]}>
          <div className={styles["img-container"]}>
            <img src="https://www.blender.org/wp-content/uploads/2023/05/blender_36_lts_splash.jpg" alt="" />
          </div>
          <div className={styles["content-container"]}>
              <div>
                <p className={styles["txt-body-2"]}>Design3D  |  Animation3D  |  Modeling</p>
              </div>
              <div>
                <p className={styles["h1"]}>Complete Blender Creator: Learn 3D Modelling for Beginners</p>
              </div>
              <div>
                <p className={styles["txt-b"]}>1000+ rating</p>
              </div>
              <div>
                <p className={styles["txt-body-1"]}>Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course.</p>
              </div>
              <div className={styles["button-collection"]}>
                <button className={classNames(styles["button-left"], "txt-button")}>Check it out</button>
                <button className={classNames(styles["button-right"], "txt-button")}>Add to cart</button>
              </div>
          </div>
        </div>
        <div className={styles["horizontal-div"]}></div>
        <div className={styles["product-query-section"]}>
          <div>
            <CategoryButton />
          </div>
          <div className={styles["filter-section"]}>
              <div className={styles["button-collection"]}>
                <p className={styles["h1"]}>Sort by:</p>
                <button className={classNames(styles["button-left"], "txt-button")}>Name</button>
                <button className={classNames(styles["button-right"], "txt-button")}>Price</button>
              </div>
              <SearchBar />
          </div>
          <div className={styles["products-display"]}>
              <ProductCard imgUrl='https://public-files.gumroad.com/i4wd4uycatakd1qrwbkdmaf0mcqm' productName='GIRL PSYCHO 100 ZINE' rating='4.9' price='10.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/y126u5r2g0nzhaydzg2lysgqu8ej' productName='[Addon]MACHIN3tools' rating='4.9' price='50.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/wpzexcdsrrnpe3vb3kh9rjikhvny' productName='BagaPie Modifier' rating='4.9' price='20.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/pzkeudqq2o5fdurbyt894yexyiwv' productName='Learn how to CREATE a CUTE KITCHEN"' rating='4.9' price='100.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/i4wd4uycatakd1qrwbkdmaf0mcqm' productName='GIRL PSYCHO 100 ZINE' rating='4.9' price='10.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/y126u5r2g0nzhaydzg2lysgqu8ej' productName='[Addon]MACHIN3tools' rating='4.9' price='50.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/wpzexcdsrrnpe3vb3kh9rjikhvny' productName='BagaPie Modifier' rating='4.9' price='20.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/pzkeudqq2o5fdurbyt894yexyiwv' productName='Learn how to CREATE a CUTE KITCHEN"' rating='4.9' price='100.000'/><ProductCard imgUrl='https://public-files.gumroad.com/i4wd4uycatakd1qrwbkdmaf0mcqm' productName='GIRL PSYCHO 100 ZINE' rating='4.9' price='10.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/y126u5r2g0nzhaydzg2lysgqu8ej' productName='[Addon]MACHIN3tools' rating='4.9' price='50.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/wpzexcdsrrnpe3vb3kh9rjikhvny' productName='BagaPie Modifier' rating='4.9' price='20.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/pzkeudqq2o5fdurbyt894yexyiwv' productName='Learn how to CREATE a CUTE KITCHEN"' rating='4.9' price='100.000'/><ProductCard imgUrl='https://public-files.gumroad.com/i4wd4uycatakd1qrwbkdmaf0mcqm' productName='GIRL PSYCHO 100 ZINE' rating='4.9' price='10.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/y126u5r2g0nzhaydzg2lysgqu8ej' productName='[Addon]MACHIN3tools' rating='4.9' price='50.000'/>
              <ProductCard imgUrl='https://public-files.gumroad.com/wpzexcdsrrnpe3vb3kh9rjikhvny' productName='BagaPie Modifier' rating='4.9' price='20.000'/>
          </div>
        </div>
        <Footer />
    </div>
  );
};