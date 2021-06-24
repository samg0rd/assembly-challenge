import styled from 'styled-components'

const ThumbnailStyles = styled.div`    
    border: 1px solid silver;        
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px skyblue;
    transition: all .2s;
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
        height: auto;
        flex: 2;
    }    
    p{
        margin: 0;
        padding: 10px;        
        margin-top: auto;
        text-align: left;
        font-size: 13px;
    }
    &:hover{
        box-shadow: 0px 0px 0px 1px transparent;
    }
`

export default ThumbnailStyles