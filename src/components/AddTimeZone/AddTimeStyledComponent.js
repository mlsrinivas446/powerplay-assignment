import styled from 'styled-components'
import {FaCalendarAlt, FaPlus} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import DatePicker from 'react-datepicker'

// Container for adding time zones
export const AddTimeZoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  border: 1px solid #e1e1e1;
  min-height: 10vh;
  padding: 5px;
  background-color: ${props =>
    props.isDarkMode ? '#181818' : 'rgb(226, 221, 221)'};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

// Container for time zone input
export const TimeZoneInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

// Container for search functionality
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  width: 80vw;
  background-color: ${props => (props.isDarkMode ? '#26272a' : '#f9f9f9')};

  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`

// Styled input for search
export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  color: #94a3b8;
  background-color: ${props => (props.isDarkMode ? '#26272a' : '#f9f9f9')};
  flex-grow: 1;
  padding: 10px 8px;
  width: 60vw;

  @media screen and (min-width: 478px) {
    font-size: 16px;
    width: 25vw;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 25vw;
  }
`

// Styled button for search
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

// Container for hamburger menu
export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  

  @media screen and (min-width: 478px) {
    display: none;
  }
`

// Hamburger button icon
export const HamburgerButton = styled(RxHamburgerMenu)`
  color: #1e90ff;
  font-size: 30px;

  @media screen and (min-width: 478px) {
    font-size: 35px;
  }
`

// Plus icon for adding
export const StyledFaPlus = styled(FaPlus)`
  font-size: 20px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`

// Container for date and input buttons
export const DateAndInputButtonsContainer = styled.div`
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-top: 10px;

  @media screen and (min-width: 478px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 10px;
  }
`

// Wrapper for date picker
export const DatePickerWrapper = styled.label`
  display: flex;
  align-items: center;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  width: 80vw;
  margin-bottom: 10px;
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#f9f9f9')};

  @media screen and (min-width: 478px) {
    width: 35vw;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: 20vw;
  }
`

// Styled date input
export const DateInput = styled(DatePicker)`
  border: none;
  outline: none;
  font-size: 14px;
  color: #94a3b8;
  background-color: ${props => (props.isDarkMode ? '#26272a' : '#f9f9f9')};
  flex-grow: 1;
  padding: 10px 8px;
  width: 60vw;

  @media screen and (min-width: 478px) {
    font-size: 16px;
    width: 25vw;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 15vw;
  }
`

// Calendar icon styling
export const CalendarIcon = styled(FaCalendarAlt)`
  color: #1e90ff;
  font-size: 18px;
  margin: auto;

  @media screen and (min-width: 487px) {
    font-size: 25px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

// Wrapper for icon buttons
export const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  margin-bottom: 10px;

  @media screen and (min-width: 478px) {
    width: 35vw;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: 20vw;
    margin-left: 8px;
  }
`

// Styled icon button
export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkMode ? '#26272a' : '#f9f9f9')};
  border: 1px solid #ccc;
  border-radius: 2px;
  cursor: pointer;
  color: #1e90ff;
  font-size: 20px;
  padding: 8px 8px;
  margin: 0px;
  flex: 1;

  &:hover {
    background-color: #1e90ff;
    color: #fff;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
