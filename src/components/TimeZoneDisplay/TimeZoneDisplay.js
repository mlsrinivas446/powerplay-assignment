import React, {useState, useContext} from 'react'
import moment from 'moment-timezone'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import {
  TimeZoneDisplayContainer,
  TimeZoneSection,
  TimeZoneNameContainer,
  TimeZoneAbbreviation,
  TimeZoneFullName,
  TimeZoneTimeContainer,
  DisplayTime,
  DisplayZoneAndDateContainer,
  DisplayZone,
  DisplayDate,
  CloseIcon,
} from './DisplayStyledComponents'

const TimeZoneDisplay = ({timeZoneDetails, onDelete}) => {
  const {currentTime, isdarkmode} = useContext(TimeZoneContext)
  const [sliderValue, setSliderValue] = useState(0)

  const handleSliderChange = value => {
    setSliderValue(value)
  }

  const adjustedTime = moment
    .tz(currentTime, timeZoneDetails.id)
    .add(sliderValue, 'minutes')
    .format('h:mm A')

  return (
    <TimeZoneDisplayContainer isdarkmode={isdarkmode}>
      <CloseIcon
        className="close-icon"
        onClick={() => onDelete(timeZoneDetails.id)}
      />
      <TimeZoneSection>
        <TimeZoneNameContainer>
          <TimeZoneAbbreviation isdarkmode={isdarkmode}>
            {timeZoneDetails.abbreviation}
          </TimeZoneAbbreviation>
          <TimeZoneFullName isdarkmode={isdarkmode}>
            {timeZoneDetails.longName}
          </TimeZoneFullName>
        </TimeZoneNameContainer>
        <TimeZoneTimeContainer>
          <DisplayTime isdarkmode={isdarkmode}>{adjustedTime}</DisplayTime>
          <DisplayZoneAndDateContainer>
            <DisplayZone isdarkmode={isdarkmode}>
              {timeZoneDetails.id}
            </DisplayZone>
            <DisplayDate isdarkmode={isdarkmode}>
              {moment(currentTime).format('MMM D, YYYY')}
            </DisplayDate>
          </DisplayZoneAndDateContainer>
        </TimeZoneTimeContainer>
      </TimeZoneSection>
      <Slider
        min={-700}
        max={700}
        step={15}
        value={sliderValue}
        tipFormatter={value => `${value} minutes`}
        onChange={handleSliderChange}
      />
    </TimeZoneDisplayContainer>
  )
}

export default TimeZoneDisplay
