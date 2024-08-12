import React from 'react'
import moment from 'moment-timezone'
import {
  TimeZoneDisplayContainer,
  TimeZoneSection,
  TimeZoneNameContainer,
  TimeZoneAbbreviation,
  TimeZoneFullName,
  TimeZoneTimeContainer,
  DisplayTime,
  DispalyZoneAndDateContainer,
  DisplayZone,
  DisplayDate,
  CloseIcon,
} from './DisplayStyledComponents'

const TimeZoneDisplay = ({timeZone, currentTime, onDelete, isDarkMode}) => {
  const timeInZone = moment.tz(currentTime, timeZone.id).format('h:mm A')

  return (
    <TimeZoneDisplayContainer isDarkMode={isDarkMode}>
      <CloseIcon className="close-icon" onClick={onDelete} />
      <TimeZoneSection>
        <TimeZoneNameContainer>
          <TimeZoneAbbreviation>{timeZone.abbreviation}</TimeZoneAbbreviation>
          <TimeZoneFullName>{timeZone.longName}</TimeZoneFullName>
        </TimeZoneNameContainer>
        <TimeZoneTimeContainer>
          <DisplayTime isDarkMode={isDarkMode}>{timeInZone}</DisplayTime>
          <DispalyZoneAndDateContainer>
            <DisplayZone>{timeZone.id}</DisplayZone>
            <DisplayDate>{currentTime.format('MMM D, YYYY')}</DisplayDate>
          </DispalyZoneAndDateContainer>
        </TimeZoneTimeContainer>
      </TimeZoneSection>
    </TimeZoneDisplayContainer>
  )
}

export default TimeZoneDisplay
