import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
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
  const [ismenuopen, setismenuopen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleAddClick = () => {
    if (searchValue.trim() === '') return
    const newTimeZone = {id: searchValue, zone: searchValue}
    onAdd(newTimeZone)
    setSearchValue('')
  }

  const toggleHeader = () => {
    setismenuopen(prev => !prev)
  }

  return (
    <TimeZoneContext.Consumer>
      {provider => {
        const {isdarkmode, onChangeMode, handleDateChange} = provider

        const changeMode = () => onChangeMode()

        return (
          <AddTimeZoneContainer isdarkmode={isdarkmode}>
            <TimeZoneInputContainer>
              <SearchContainer isdarkmode={isdarkmode}>
                <SearchInput
                  type="search"
                  placeholder="Add Time Zone, City or Town"
                  isdarkmode={isdarkmode}
                  value={searchValue}
                  onChange={event => setSearchValue(event.target.value)}
                />
                <SearchButton isdarkmode={isdarkmode} onClick={handleAddClick}>
                  <StyledFaPlus />
                </SearchButton>
              </SearchContainer>

              <HamburgerContainer>
                <HamburgerButton onClick={toggleHeader} />
              </HamburgerContainer>
            </TimeZoneInputContainer>

            <DateAndInputButtonsContainer
              isdarkmode={isdarkmode}
              ismenuopen={ismenuopen.toString()}
            >
              <DatePickerWrapper isdarkmode={isdarkmode}>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => {
                    setSelectedDate(date)
                    handleDateChange(date)
                  }}
                  dateFormat="MMM dd, yyyy"
                  customInput={<DateInput isdarkmode={isdarkmode} />}
                />
                <CalendarIcon />
              </DatePickerWrapper>

              <IconButtonWrapper isdarkmode={isdarkmode}>
                <IconButton isdarkmode={isdarkmode}>
                  <FaCalendarAlt />
                </IconButton>
                <IconButton isdarkmode={isdarkmode}>
                  <FaExchangeAlt />
                </IconButton>
                <IconButton isdarkmode={isdarkmode}>
                  <FaLink />
                </IconButton>
                <IconButton onClick={changeMode} isdarkmode={isdarkmode}>
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
