import styled from 'styled-components'

export const AddTimeZoneContainer = styled.div`
    width: 100%;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e1e1e1;
    background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
    width: 70vw;
     @media screen and (min-width: 478px){
        font-size: 35px;
    }
    @media screen and (min-width: 768px){
        font-size: 45px;
    }
`

export const AddTimeZoneInputEl = styled.input``
