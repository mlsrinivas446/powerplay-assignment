import React from 'react'

const TimeZoneContext = React.createContext({
  isDarkMode: false,
  changeMode: () => {},
})

export default TimeZoneContext
