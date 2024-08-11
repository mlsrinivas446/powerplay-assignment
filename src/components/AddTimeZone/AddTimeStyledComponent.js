import styled from 'styled-components'
import {FaCalendarAlt, FaPlus} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'

export const AddTimeZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  border-bottom: 1px solid #e1e1e1;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const TimeZoneInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  padding: 0 0px;

  @media screen and (min-width: 768px) {
    width: 70%;
    padding: 0;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  width: 40vw;

  @media screen and (min-width: 478px) {
    width: 50vw;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background-color: #fff;
  font-size: 14px;
  color: #94a3b8;
  outline: none;
  min-width: 50vw;
  padding: 10px 8px;

  @media screen and (min-width: 478px) {
    font-size: 16px;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    min-width: 25vw;
    font-size: 18px;
    padding: 8px;
  }
`

export const SearchButton = styled.button`
  color: #1e90ff;
  background-color: transparent;
  border: none;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  

  @media screen and (min-width: 478px) {
    display: none;
  }
`

export const HamburgerButton = styled(RxHamburgerMenu)`
  color: #1e90ff;
  font-size: 30px;

  @media screen and  (min-width: 478px) {
    font-size: 35px;
  }
`

export const StyledFaPlus = styled(FaPlus)`
  font-size: 20px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`

export const DateAndInputButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-top: 10px;

  @media screen and (min-width: 478px) {
    flex-direction: row;
    justify-content: space-between;
   
   
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-left: 10px;
   
  }
  
`

export const DatePickerWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  width: 80vw;
  margin-bottom: 10px;

  @media (min-width: 478px) {
    width: 35vw;
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    width: 20vw;
  }
`

export const DateInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  color: #94a3b8;
  background-color: #fff;
  flex-grow: 1;
  min-width: 60vw;
  padding: 10px 8px;

  @media screen and  (min-width: 478px) {
    font-size: 16px;
    min-width: 25vw;
  }

  @media screen and  (min-width: 768px) {
    font-size: 16px;
    min-width: 13vw;
  }
`

export const CalendarIcon = styled(FaCalendarAlt)`
  color: #1e90ff;
  font-size: 18px;
  margin-left: 12px;
  margin-right: 12px;

  @media (min-width: 487px) {
    font-size: 25px;
    margin-left: 8px;
    margin-right: 8px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: 12px;
    margin-right: 12px;
  }
`

export const IconButtonWrapper = styled.div`
  display: flex;
  width: 80vw;
  margin-bottom: 10px;

  @media (min-width: 478px) {
    width: 40vw;
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    width: 25vw;
  }
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  margin: 0;
  color: #1e90ff;
  font-size: 20px;
  flex: 1;
  padding: 10px 8px;

  &:hover {
    background-color: #1e90ff;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 10px 8px;
  }
`
