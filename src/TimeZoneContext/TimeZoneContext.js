import React from 'react'

const TimeZoneContext = React.createContext({
  isDarkMode: false,
  onChangeMode: () => {},
})

export default TimeZoneContext
