import styled from 'styled-components'

const FIlterInputStyles = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid silver;
    border-right: none;
    border-left: none;
    outline: none;
    padding: 10px;
    font-size: 20px;    
    box-shadow: 0px 2px 4px silver;
    transition: all .2s;
    &:focus{
        box-shadow: 0px 3px 4px limegreen;
    }
`

export default FIlterInputStyles