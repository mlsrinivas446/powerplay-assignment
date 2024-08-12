import React, {Component} from 'react'
import moment from 'moment-timezone'
import AddTimeZone from '../../components/AddTimeZone/AddTimeZone'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import TimeZoneDisplay from '../../components/TimeZoneDisplay/TimeZoneDisplay'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {
  TimeZoneContainer,
  TimeZoneHeading,
  TimeZoneNavContainer,
  NavUnorderedList,
  NavListEl,
  NavAnchorEl,
  ConverterContainer,
} from './converterStyledComponents'

class TimeZoneConverter extends Component {
  state = {
    isDarkMode: false,
    timeZones: [
      {id: 'Etc/UTC', zone: 'UTC'},
      {id: 'Asia/Kolkata', zone: 'IST'},
    ],
    currentTime: moment(),
    timeZoneList: [],
    searchQuery: '',
  }

  componentDidMount() {
    this.getTimeZoneDetails()
  }

  getTimeZoneDetails = async () => {
    try {
      const response = await fetch('https://api.savvycal.com/v1/time_zones', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer pt_secret_cfdd1468d9a1ab2b873e7531f02943bb',
        },
      })

      if (response.ok) {
        const data = await response.json()
        const formattedTimeZoneList = data.map(each => ({
          abbreviation: each.abbreviation,
          aliases: each.aliases,
          canonical: each.canonical,
          dst: each.dst,
          formattedOffset: each.formatted_offset,
          genericLongName: each.generic_long_name,
          golden: each.golden,
          id: each.id,
          legacy: each.legacy,
          longName: each.long_name,
          offset: each.offset,
          offsetStd: each.offset_std,
          offsetUtc: each.offset_utc,
          period: {
            until: each.period?.until,
            from: each.period?.from,
          },
          windowsZone: each.windows_zone,
        }))
        this.setState({timeZoneList: formattedTimeZoneList})
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error fetching timezone:', error)
    }
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

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  handleDateChange = date => {
    this.setState({currentTime: moment(date)})
  }

  getFilteredTimeZones = () => {
    const {timeZones, timeZoneList, searchQuery} = this.state
    const filteredList = timeZoneList.filter(formattedZone =>
      timeZones.some(timeZone => timeZone.id === formattedZone.id),
    )
    if (searchQuery.trim() === '') {
      return filteredList
    }
    return filteredList.filter(
      zone =>
        zone.longName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        zone.abbreviation.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }

  render() {
    const {isDarkMode, currentTime} = this.state
    const formattedDate = currentTime.format('MMM D, YYYY')
    const filteredTimeZones = this.getFilteredTimeZones()

    return (
      <TimeZoneContext.Provider
        value={{
          isDarkMode,
          onChangeMode: this.onChangeMode,
          currentTime: formattedDate,
          timeZoneList: this.state.timeZoneList,
        }}
      >
        <TimeZoneContainer isDarkMode={isDarkMode}>
          <TimeZoneHeading isDarkMode={isDarkMode}>
            {filteredTimeZones.map((zone, index) => (
              <React.Fragment key={zone.id}>
                <span>{zone.abbreviation}</span>
                {index < filteredTimeZones.length - 1 && (
                  <span style={{margin: '0 10px'}}>to</span>
                )}
              </React.Fragment>
            ))}
          </TimeZoneHeading>
          <TimeZoneNavContainer>
            <NavUnorderedList>
              <NavListEl>
                <NavAnchorEl href="#converter">Converter</NavAnchorEl>
              </NavListEl>
              <NavListEl>
                <NavAnchorEl href="#time-diff">Time Difference</NavAnchorEl>
              </NavListEl>
              <NavListEl>
                <NavAnchorEl href="#table-view">Table</NavAnchorEl>
              </NavListEl>
              {this.state.timeZones.map(NavTimezone => (
                <NavListEl key={NavTimezone.id}>
                  <NavAnchorEl href="#table-view">
                    {NavTimezone.zone}
                  </NavAnchorEl>
                </NavListEl>
              ))}
            </NavUnorderedList>
          </TimeZoneNavContainer>
          <ConverterContainer isDarkMode={isDarkMode}>
            <AddTimeZone onAdd={this.handleTimeZoneAddition} />
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {provided => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {filteredTimeZones.map((eachZone, index) => (
                      <Draggable
                        key={eachZone.id}
                        draggableId={eachZone.id}
                        index={index}
                      >
                        {provided => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TimeZoneDisplay
                              timeZone={eachZone}
                              currentTime={currentTime}
                              onDelete={() =>
                                this.handleTimeZoneDeletion(index)
                              }
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </ConverterContainer>
        </TimeZoneContainer>
      </TimeZoneContext.Provider>
    )
  }
}

export default TimeZoneConverter
