import React, {Component} from 'react'
import moment from 'moment-timezone'
import AddTimeZone from '../../components/AddTimeZone/AddTimeZone'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import TimeZoneDisplay from '../../components/TimeZoneDisplay/TimeZoneDisplay'
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
    isdarkmode: false,
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
          id: each.id,
          longName: each.long_name,
          abbreviation: each.abbreviation,
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
    this.setState(prevState => ({isdarkmode: !prevState.isdarkmode}))
  }

  handleTimeZoneAddition = timeZone => {
    this.setState(prevState => ({
      timeZones: [...prevState.timeZones, timeZone],
    }))
  }

  handleTimeZoneDeletion = id => {
    this.setState(prevState => ({
      timeZones: prevState.timeZones.filter(each => each.id !== id),
    }))
  }

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  handleDateChange = date => {
    this.setState({currentTime: moment(date)})
  }

  render() {
    const {isdarkmode, currentTime, timeZones, timeZoneList} = this.state

    const filteredTimeZones = timeZoneList.filter(zone =>
      timeZones.some(eachZone => eachZone.id === zone.id),
    )

    return (
      <TimeZoneContext.Provider
        value={{
          isdarkmode,
          onChangeMode: this.onChangeMode,
          currentTime,
          timeZones,
          handleDateChange: this.handleDateChange,
        }}
      >
        <TimeZoneContainer isdarkmode={isdarkmode}>
          <TimeZoneHeading isdarkmode={isdarkmode}>
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
              {timeZones.map(NavTimezone => (
                <NavListEl key={NavTimezone.id}>
                  <NavAnchorEl href="#table-view">
                    {NavTimezone.zone}
                  </NavAnchorEl>
                </NavListEl>
              ))}
            </NavUnorderedList>
          </TimeZoneNavContainer>
          <ConverterContainer isdarkmode={isdarkmode}>
            <AddTimeZone onAdd={this.handleTimeZoneAddition} />
            {filteredTimeZones.map(eachZone => (
              <TimeZoneDisplay
                key={eachZone.id}
                timeZoneDetails={eachZone}
                currentTime={currentTime}
                onDelete={() => this.handleTimeZoneDeletion(eachZone.id)} // Fixed onDelete
              />
            ))}
          </ConverterContainer>
        </TimeZoneContainer>
      </TimeZoneContext.Provider>
    )
  }
}

export default TimeZoneConverter
