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
  return (
    <TimeZoneContext.Consumer>
      {provider => {
        const {isDarkMode} = provider
        return (
          <AddTimeZoneContainer isDarkMode={isDarkMode}>
            <TimeZoneInputContainer isDarkMode={isDarkMode}>
              <SearchContainer data-testid="searchButton">
                <SearchInput
                  type="search"
                  placeholder="Add Time Zone, City or Town"
                />
                <SearchButton>
                  <StyledFaPlus />
                </SearchButton>
              </SearchContainer>

              <HamburgerContainer>
                <HamburgerButton />
              </HamburgerContainer>
            </TimeZoneInputContainer>

            <DateAndInputButtonsContainer>
              <DatePickerWrapper>
                <DateInput type="text" value="Aug 11, 2024" readOnly />
                <CalendarIcon />
              </DatePickerWrapper>

              <IconButtonWrapper>
                <IconButton>
                  <FaPlusSquare />
                </IconButton>
                <IconButton>
                  <FaExchangeAlt />
                </IconButton>
                <IconButton>
                  <FaLink />
                </IconButton>
                <IconButton>
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
