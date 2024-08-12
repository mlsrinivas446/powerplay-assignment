import React from 'react'

const TimeZoneContext = React.createContext({
  isdarkmode: '',
  onChangeMode: () => {},
  currentTime: '',
  timeZoneList: [],
  timeZones: [],
  handleSearchChange: () => {},
  handleDateChange: () => {},
})

export default TimeZoneContext
