import React, { useState } from 'react';
import FilterInputStyles from '../../styles/FIlterInputStyles'

const FilterInput = ({filterHandler}) => {
    const [inputVal, setInputVal] = useState("")

    return (
        <FilterInputStyles 
            type="text" 
            placeholder="Search / Filter" 
            value={inputVal}
            onChange={(e)=>{
                setInputVal(e.target.value)
                filterHandler && filterHandler(e.target.value)
            }}            
            data-testid="searchFilter"
        />
    );
};

export default FilterInput;