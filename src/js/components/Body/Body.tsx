import React from 'react';
import background from '../../../icons/background_banner.png';
import styles from './Body.module.scss';

const Body = () => {
    return (
        <div>
            <img className={styles.main} src={background}></img>
        </div>
    )
}

export default Body;