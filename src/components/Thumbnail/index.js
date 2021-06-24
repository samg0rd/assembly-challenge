import React from 'react';
import { useHistory } from "react-router-dom";
import ThumbnailStyles from '../../styles/ThumbnailStyles'

const Thumbnail = ({item}) => {

    const {title, url, author, thumbnail} = item 
    const history = useHistory();

    const goToPage = () => {        
        history.push({
            pathname: "/post",
            state: {
                title,
                url,
                author
            }
        });
    }

    return (
        <ThumbnailStyles onClick={goToPage}>
            <img src={thumbnail} alt={title} data-testid="thumbImg"/>
            <p data-testid="thumbTitle">{title}</p>
        </ThumbnailStyles>
    );
};

export default Thumbnail;