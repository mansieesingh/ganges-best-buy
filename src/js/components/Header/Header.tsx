import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../icons/outfox_logo.png';

const Header = () => {
    return (
        <>
                <header className={styles.headerMenu}>
                    {/* <div className={styles.left}>
                        <img className={styles.menuTrigger} src="https://img.icons8.com/material/24/000000/menu--v1.png" />
                        <img className={styles.logo} src={logo}></img>
                    </div>
                    <div className={styles.right}>

                        <img className={styles.user} src="https://img.icons8.com/small/64/000000/user.png" />
                        <img className={styles.shoppingBag} src="https://img.icons8.com/wired/64/000000/shopping-bag.png" />
                    </div> */}
                    <img className={styles.menuTrigger} src="https://img.icons8.com/material/24/000000/menu--v1.png" />
                    <img className={styles.logo} src={logo}></img>                    
                    <img className={styles.shoppingBag} src="https://img.icons8.com/wired/64/000000/shopping-bag.png" />
                </header>
        </>
    )
}

export default Header;