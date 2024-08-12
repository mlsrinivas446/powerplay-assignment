import React from 'react'

const TimeZoneContext = React.createContext({
  isDarkMode: false,
  onChangeMode: () => {},
  currentTime: '',
  timeZoneList: [],
})

export default TimeZoneContext
