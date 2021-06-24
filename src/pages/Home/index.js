import React, { useEffect, useState } from 'react';
import Thumbnails from '../../components/Thumbnails'
import Header from '../../components/Header'
import Loading from '../../components/Loading'

const Home = () => {

    const [imgData, setImgData] = useState([])

    const endpoint = 'https://www.reddit.com/r/pics/.json?jsonp='
    

    useEffect(()=>{        
        fetch(endpoint).then(res => res.json())
        .then(data => {            
            setImgData(data.data.children)
        }).catch(error => console.log(error))                        
    },[])

    return (
        <div>
            <Header />            
            {imgData.length <= 0 ? <Loading /> : <Thumbnails imgData={imgData}/>}            
        </div>
    );
};

export default Home;