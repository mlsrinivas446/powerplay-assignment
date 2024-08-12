import React, {useState} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import {FaCalendarAlt, FaExchangeAlt, FaLink, FaMoon} from 'react-icons/fa'
import {
  AddTimeZoneContainer,
  TimeZoneInputContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  HamburgerContainer,
  HamburgerButton,
  StyledFaPlus,
  DateAndInputButtonsContainer,
  DatePickerWrapper,
  DateInput,
  CalendarIcon,
  IconButtonWrapper,
  IconButton,
} from './AddTimeStyledComponents'

const AddTimeZone = ({onAdd}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }

  const handleAddClick = () => {
    // Here you would typically look up the time zone by the search value
    // For now, let's just simulate adding a new time zone
    const newTimeZone = {id: searchValue, zone: searchValue}
    onAdd(newTimeZone)
    setSearchValue('')
  }

  return (
    <TimeZoneContext.Consumer>
      {provider => {
        const {isDarkMode, onChangeMode, currentTime} = provider

        const changeMode = () => onChangeMode()

        return (
          <AddTimeZoneContainer isDarkMode={isDarkMode}>
            <TimeZoneInputContainer isDarkMode={isDarkMode}>
              <SearchContainer isDarkMode={isDarkMode}>
                <SearchInput
                  type="search"
                  placeholder="Add Time Zone, City or Town"
                  isDarkMode={isDarkMode}
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <SearchButton isDarkMode={isDarkMode} onClick={handleAddClick}>
                  <StyledFaPlus />
                </SearchButton>
              </SearchContainer>

              <HamburgerContainer>
                <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
              </HamburgerContainer>
            </TimeZoneInputContainer>

            <DateAndInputButtonsContainer
              isDarkMode={isDarkMode}
              isMenuOpen={isMenuOpen}
            >
              <DatePickerWrapper htmlFor="calender" isDarkMode={isDarkMode}>
                <DateInput
                  value={currentTime}
                  id="calender"
                  isDarkMode={isDarkMode}
                />
                <CalendarIcon />
              </DatePickerWrapper>

              <IconButtonWrapper isDarkMode={isDarkMode}>
                <IconButton isDarkMode={isDarkMode}>
                  <FaCalendarAlt />
                </IconButton>
                <IconButton isDarkMode={isDarkMode}>
                  <FaExchangeAlt />
                </IconButton>
                <IconButton isDarkMode={isDarkMode}>
                  <FaLink />
                </IconButton>
                <IconButton onClick={changeMode} isDarkMode={isDarkMode}>
                  <FaMoon />
                </IconButton>
              </IconButtonWrapper>
            </DateAndInputButtonsContainer>
          </AddTimeZoneContainer>
        )
      }}
    </TimeZoneContext.Consumer>
  )
}

export default AddTimeZone
