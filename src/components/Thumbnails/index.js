import React, { useState } from 'react';
import Thumbnail from '../Thumbnail'
import FilterInput from '../FilterInput'
import ThumbnailsStyles from '../../styles/ThumbnailsStyles'


const Thumbnails = ({imgData}) => {        
    const [filterData, setFilterData] = useState([...imgData])
    const [filterFlag, setFilterFlag] = useState(false)    

    function filterHandler(val) {          
        let query = val.toLowerCase()

        if(val.length > 0){                                             
            setFilterData(imgData.filter(item => item.data.title.toLowerCase().includes(query)))
            setFilterFlag(true)     
        }else{
            setFilterFlag(false)            
            setFilterData(imgData)
        }                
    }

    return (
        <>
        <FilterInput filterHandler={filterHandler}/>
        <ThumbnailsStyles>            
            {
                !filterFlag ? imgData.map((item, i)=>(
                    <Thumbnail item={item.data} key={i}/>
                )) : filterData.map((item, i)=>(
                    <Thumbnail item={item.data} key={i}/>
                ))
            }            
        </ThumbnailsStyles>
        </>
    );
};

export  default Thumbnails;