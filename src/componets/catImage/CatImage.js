import React from 'react';
import styles from './CatImgae.module.scss';

const CatImage = () => {
    return (
        <>
            <img alt="cat" className={styles.image} src="https://cataas.com/cat"/>
        </>
    );
};

export default CatImage;