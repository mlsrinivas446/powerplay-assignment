import React, {Component} from 'react'
import moment from 'moment-timezone'
//import TimeZoneDisplay from '../../components/TimeZoneDisplay/TimeZoneDisplay'
import AddTimeZone from '../../components/AddTimeZone/AddTimeZone'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
//import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {
  TimeZomeContainer,
  TimeZomeHeading,
  TimeZoneNavContainer,
  NavUnorderList,
  NavListEl,
  NavAnchorEl,
  ConverterContainer,
} from './converterStyledComponents'

class TimeZoneConverter extends Component {
  state = {
    isDarkMode: false,
    timeZones: ['UTC', 'Asia/Kolkata'],
    currentTime: moment(),
  }

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode, timeZones} = this.state
    return (
      <TimeZoneContext.Provider value={isDarkMode}>
        <TimeZoneContext.Consumer>
          {provider => {
            const {isDarkMode} = provider
            return (
              <TimeZomeContainer isDarkMode={isDarkMode}>
                <TimeZomeHeading isDarkMode={isDarkMode}>UTF</TimeZomeHeading>
                <TimeZoneNavContainer>
                  <NavUnorderList>
                    <NavListEl>
                      <NavAnchorEl href="#converter">Converter</NavAnchorEl>
                    </NavListEl>
                    <NavListEl>
                      <NavAnchorEl href="#time-diff">
                        Time Difference
                      </NavAnchorEl>
                    </NavListEl>
                    <NavListEl>
                      <NavAnchorEl href="#table-view">Table</NavAnchorEl>
                    </NavListEl>
                    {timeZones.map(NavTimezone => (
                      <NavListEl>
                        <NavAnchorEl href="#table-view">
                          {NavTimezone}
                        </NavAnchorEl>
                      </NavListEl>
                    ))}
                  </NavUnorderList>
                </TimeZoneNavContainer>
                <ConverterContainer>
                  <AddTimeZone />
                </ConverterContainer>
              </TimeZomeContainer>
            )
          }}
        </TimeZoneContext.Consumer>
      </TimeZoneContext.Provider>
    )
  }
}

export default TimeZoneConverter
