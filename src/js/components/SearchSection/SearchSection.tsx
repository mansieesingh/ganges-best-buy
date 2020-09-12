import React, { useState } from 'react';
import styles from './SearchSection.module.scss';
import Expandable from '../Expandable/Expandable';
import { data } from '../mock_data/selectionData';

interface optionListTwoItems {
    catgName: string
    brandNames: Array<string>
}
interface optionListOneItems {
    mainCatgName: string
    catgslist: Array<optionListTwoItems>

}
const SearchSection = () => {
    const [selectionLevelOne, setSelectionLevelOne] = useState('--Select--');
    const [selectionLevelTwo, setSelectionLevelTwo] = useState('--Select--');
    const [selectionLevelThree, setSelectionLevelThree] = useState('--Select--');
    const [expandOne, setExpandOne] = useState(false);
    const [expandTwo, setExpandTwo] = useState(false);
    const [expandThree, setExpandThree] = useState(false);


    const [optionsListTwo, setOptionsListTwo] = useState(['0'])
    const [optionsListThree, setOptionsListThree] = useState(['0'])

    const handleSelectionOne = (value: string) => {
        console.log("CALLED: handleSelectionOne")
        setSelectionLevelOne(value)
        setExpandOne(false)
        let arr = data.filter((item: optionListOneItems) => item.mainCatgName === value)
        let optionsSecondLevel = arr[0].catgslist.map((itemLevelTwo: optionListTwoItems) => itemLevelTwo.catgName);
        setOptionsListTwo(optionsSecondLevel)
    }

    const handleSelectionTwo = (value: string) => {
        console.log("CALLED: handleSelectionTwo")
        setSelectionLevelTwo(value)
        setExpandTwo(false)
        let arr = data.filter((item: optionListOneItems) => item.mainCatgName === selectionLevelOne)
        let arr2 = arr[0].catgslist.filter((itemLevelTwo: optionListTwoItems) => itemLevelTwo.catgName === value);
        let optionsThirdLevel = arr2[0].brandNames;
        setOptionsListThree(optionsThirdLevel);
    }

    const handleSelectionThree = (value: string) => {
        console.log("CALLED: handleSelectionThree")
        setSelectionLevelThree(value)
        setExpandThree(false)
    }
    const handleClickOne = () => {
        console.log("CALLED: handleClickOne")
        let temp = !expandOne;
        setExpandOne(temp)
    }
    const handleClickTwo = () => {
        console.log("CALLED: handleClickTwo")
        let temp = !expandTwo;
        setExpandTwo(temp)
    }
    const handleClickThree = () => {
        console.log("CALLED: handleClickThree")
        let temp = !expandThree;
        setExpandThree(temp)
    }

    const optionsListOne = data.map((item: optionListOneItems) => item.mainCatgName);

    return (
        <>
            <section className={styles.searchSection}>
                <Expandable
                    selected={selectionLevelOne}
                    selectionHandler={handleSelectionOne}
                    clickHandler={handleClickOne}
                    expand={expandOne}
                    optionsList={optionsListOne}
                />
                {optionsListTwo[0] !== '0' &&
                    <Expandable
                        selected={selectionLevelTwo}
                        selectionHandler={handleSelectionTwo}
                        clickHandler={handleClickTwo}
                        expand={expandTwo}
                        optionsList={optionsListTwo}
                    />
                }
                {optionsListThree[0] !== '0' &&
                    <Expandable
                        selected={selectionLevelThree}
                        selectionHandler={handleSelectionThree}
                        clickHandler={handleClickThree}
                        expand={expandThree}
                        optionsList={optionsListThree}
                    />}
            </section>
            {optionsListThree[0] !== '0' && selectionLevelThree !== '--Select--' && 
                <section>
                    <button className={styles.searchButton}>Let's Go!</button>
                </section>
            }
        </>
    )
}

export default SearchSection;