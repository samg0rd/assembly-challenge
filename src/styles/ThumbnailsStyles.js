import styled from 'styled-components'

const ThumbnailsStyles = styled.div`    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }     
    @media (max-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`

export default ThumbnailsStyles