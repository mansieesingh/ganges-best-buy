import React from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
    label: string,
    selected: string,
    categoryList: Array<string>,
    handleChange: Function
}
const Dropdown = ({ label, selected, categoryList, handleChange }: DropdownProps) => {
    return (
        <div className={styles.dropdown}>
            <label>
                {label}
            </label>
            <select value={selected} onChange={(e) => handleChange(e.currentTarget.value)}>
                {categoryList.map((item) => <option value={item}>{item}</option>)}
            </select>
            
        </div>
    )
}

export default Dropdown;