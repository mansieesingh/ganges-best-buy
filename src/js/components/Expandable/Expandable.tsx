import React, { useState } from 'react';
import styles from './Expandable.module.scss';

interface ExpandableProps {
    selected: string
    selectionHandler: Function
    expand: boolean
    clickHandler: Function
    optionsList: Array<string>
}
const Expandable = ({ selected, selectionHandler, expand, clickHandler, optionsList }: ExpandableProps) => {

    return (
        <div className={styles.tile}>
            <div className={styles.expandable} onClick={() => clickHandler()}>
                <div className={styles.labelParent} > {selected}</div>
                <div >
                    {expand ? <img src="https://img.icons8.com/material-two-tone/24/000000/expand-arrow.png" /> :
                        <img src="https://img.icons8.com/small/16/000000/more-than.png" />
                    }
                </div>
            </div>
            {expand ? (
                <ul className={styles.list}>
                    {optionsList.map((item: string, key: number) =>  <li value={item} data-id={key} onClick={() => selectionHandler(item)}>{item}</li>
                    )}
                </ul>
            ) : null
            }
        </div>
    )
}

export default Expandable;