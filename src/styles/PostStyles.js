import styled from 'styled-components'

const PostStyles = styled.div`    
    width: 80%;
    margin: 0 auto;        
    img{
        width: 100%;
        height: 700px;
        object-fit: cover;
    }     
    p{        
        margin: 10px;
        padding: 10px;
        &.title{
            font-weight: bold;
        }
        &.author{
            font-size: 13px;
        }
    }
`

export default PostStyles