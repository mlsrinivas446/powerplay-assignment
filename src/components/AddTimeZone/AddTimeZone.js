import React, {useState} from 'react'
import 'react-datepicker/dist/react-datepicker.css'
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

const formatDate = date => {
  if (!date) return ''
  const options = {month: 'short', day: 'numeric', year: 'numeric'}
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

const AddTimeZone = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  return (
    <TimeZoneContext.Consumer>
      {provider => {
        const {isDarkMode, onChangeMode} = provider

        const changeMode = () => onChangeMode()

        return (
          <AddTimeZoneContainer isDarkMode={isDarkMode}>
            <TimeZoneInputContainer isDarkMode={isDarkMode}>
              <SearchContainer isDarkMode={isDarkMode}>
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
              <DatePickerWrapper htmlFor="calender" isDarkMode={isDarkMode}>
                <DateInput
                  value={formatDate(currentTime)}
                  locale="es"
                  onChange={date => setCurrentTime(date)}
                  id="calender"
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
