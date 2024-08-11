import React, {Component} from 'react'
import moment from 'moment-timezone'
import AddTimeZone from '../../components/AddTimeZone/AddTimeZone'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {
  TimeZomeContainer,
  TimeZomeHeading,
  TimeZoneNavContainer,
  NavUnorderList,
  NavListEl,
  NavAnchorEl,
  ConverterContainer,
} from './converterStyledComponents'

const exm = [{name: 's'}, {name: 'j'}]

class TimeZoneConverter extends Component {
  state = {
    isDarkMode: false,
    timeZones: ['UTC', 'Asia/Kolkata'],
    currentTime: moment(),
  }

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  handleTimeZoneAddition = timeZone => {
    this.setState(prevState => ({
      timeZones: [...prevState.timeZones, timeZone],
    }))
  }

  handleTimeZoneDeletion = index => {
    this.setState(prevState => ({
      timeZones: prevState.timeZones.filter((_, i) => i !== index),
    }))
  }

  onDragEnd = result => {
    if (!result.destination) return
    const items = Array.from(this.state.timeZones)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    this.setState({timeZones: items})
  }

  render() {
    const {isDarkMode, timeZones} = this.state
    return (
      <TimeZoneContext.Provider
        value={{isDarkMode, onChangeMode: this.onChangeMode}}
      >
        <TimeZoneContext.Consumer>
          {provider => {
            const {isDarkMode} = provider
            return (
              <TimeZomeContainer isDarkMode={isDarkMode}>
                <TimeZomeHeading isDarkMode={isDarkMode}>UTF</TimeZomeHeading>
                <TimeZoneNavContainer>
                  <NavUnorderList>
                    <NavListEl>
                      <NavAnchorEl href='#converter'>Converter</NavAnchorEl>
                    </NavListEl>
                    <NavListEl>
                      <NavAnchorEl href='#time-diff'>
                        Time Difference
                      </NavAnchorEl>
                    </NavListEl>
                    <NavListEl>
                      <NavAnchorEl href='#table-view'>Table</NavAnchorEl>
                    </NavListEl>
                    {timeZones.map((NavTimezone, index) => (
                      <NavListEl key={index}>
                        <NavAnchorEl href='#table-view'>
                          {NavTimezone}
                        </NavAnchorEl>
                      </NavListEl>
                    ))}
                  </NavUnorderList>
                </TimeZoneNavContainer>
                <ConverterContainer isDarkMode={isDarkMode}>
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
