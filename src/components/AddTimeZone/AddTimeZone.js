import React, {useState} from 'react'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import {
  FaCalendarAlt,
  FaExchangeAlt,
  FaLink,
  FaMoon,
  FaPlusSquare,
} from 'react-icons/fa'
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
} from './AddTimeStyledComponent'

const AddTimeZone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <TimeZoneContext.Consumer>
      {provider => {
        const {isDarkMode, onChangeMode} = provider

        const changeMode = () => onChangeMode()

        return (
          <AddTimeZoneContainer isDarkMode={isDarkMode}>
            <TimeZoneInputContainer isDarkMode={isDarkMode}>
              <SearchContainer
                data-testid="searchButton"
                isDarkMode={isDarkMode}
              >
                <SearchInput
                  type="search"
                  placeholder="Add Time Zone, City or Town"
                  isDarkMode={isDarkMode}
                />
                <SearchButton isDarkMode={isDarkMode}>
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
              <DatePickerWrapper isDarkMode={isDarkMode}>
                <DateInput
                  type="text"
                  value="Aug 11, 2024"
                  readOnly
                  isDarkMode={isDarkMode}
                />
                <CalendarIcon />
              </DatePickerWrapper>

              <IconButtonWrapper isDarkMode={isDarkMode}>
                <IconButton isDarkMode={isDarkMode}>
                  <FaPlusSquare />
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
