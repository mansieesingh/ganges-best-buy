import React, { useState } from 'react';
import styles from './SearchSection.module.scss';
import Dropdown from '../Dropdown/Dropdown';

const SearchSection = () => {
    const [section, setSection] = useState('Select');
    const [gender, setGender] = useState('Select');
    const [category, setScategory] = useState('Select');
    const [brand, setbrand] = useState('Select');

    const handleSectionChange = (s: string) => {
        console.log("user section category")
        setSection(s)
    }
    const handleGenderChange = (s: string) => {
        console.log("user gender category")
        setGender(s)
    }
    const handleCategoryChange = (s: string) => {
        console.log("user category category")
        setScategory(s)
    }
    const handleBrandChange = (s: string) => {
        console.log("user brand category")
        setbrand(s)
    }

    const sectionList = ['Western Wear', 'Ehinic Wear', 'Inner Wear', 'Sports Wear']
    const genderList = ['Women', 'Men', 'Kids']
    const categoryList = ['T-Shirt', 'Jeans', 'Shirts', 'Tops']
    const brandList = ['Levi\'s', 'Wrangler', 'Ed Hardy', 'GAP', 'Marks & Spencers']

    return (
        <>
            <section className={styles.searchSection}>
                <div className={styles.categorySearch}>
                    <Dropdown 
                        label='Section'
                        selected={section}
                        categoryList={sectionList}
                        handleChange={handleSectionChange}
                        />
                </div>
                <div className={styles.categorySearch}>
                    <Dropdown 
                        label='Gender'
                        selected={gender}
                        categoryList={genderList}
                        handleChange={handleGenderChange}
                        />
                </div>
                <div className={styles.categorySearch}>
                    <Dropdown 
                        label='Category'
                        selected={category}
                        categoryList={categoryList}
                        handleChange={handleCategoryChange}
                        />
                </div>
                <div className={styles.categorySearch}>
                    <Dropdown 
                        label='Brand'
                        selected={brand}
                        categoryList={brandList}
                        handleChange={handleBrandChange}
                        />
                </div>
               
                <div className={styles.buttonSearch}>
                        <button>Search</button>
                </div>
            </section>
        </>
    )
}

export default SearchSection;