import styled from 'styled-components'

export const TimeZoneContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    background-color: ${props => (props.isdarkmode ? '#26272a' : '#f9f9f9')};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const TimeZoneHeading = styled.header`
    font-size: 25px;
    font-weight: 700;
    padding: 10px;
    color: ${props => (props.isdarkmode ? '#fff' : '#181818')};
    
    @media screen and (min-width: 478px){
        font-size: 35px;
    }

    @media screen and (min-width: 768px){
        font-size: 45px;
    }
`

export const TimeZoneNavContainer = styled.div`
    border: 1px solid #e1e1e1;
    width: 100vw;
    height: 7vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`

export const NavUnorderedList = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    line-height: 2.5;
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
    
    @media screen and (min-width: 478px){
        line-height: 2.3;
    }

    @media screen and (min-width: 768px){
        line-height: 1.9;
    }
`

export const NavListEl = styled.li`
    list-style-type: none;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 15px;
    color: #428bca;
    cursor: pointer;
    flex: 1;
    min-width: 130px;
    text-align: center;

    @media screen and (min-width: 478px){
        font-size: 16px;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media screen and (min-width: 768px){
        font-size: 18px;
        padding-left: 12px;
        padding-right: 12px;
    }

    &:hover {
        border-bottom: 1px solid #428bca;
    }
`

export const NavAnchorEl = styled.a`
    text-decoration: none;
    color: inherit;
`

export const ConverterContainer = styled.div`
    margin: auto; 
    border: 1px solid #e1e1e1;
    min-height: 80vh;
    width: 90vw;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
