import {FaPlus} from 'react-icons/fa'
import TimeZoneContext from '../../TimeZoneContext/TimeZoneContext'
import {
  AddTimeZoneContainer,
  InputContainer,
  AddTimeZoneInputEl,
} from './AddTimeStyledComponent'

const AddTimeZone = () => {
  return (
    <TimeZoneContext.Consumer>
      {provider => {
        const {isDarkMode} = provider
        return (
          <AddTimeZoneContainer isDarkMode={isDarkMode}>
            <InputContainer isDarkMode={isDarkMode}>
              <AddTimeZoneInputEl isDarkMode={isDarkMode} />
              <FaPlus />
            </InputContainer>
          </AddTimeZoneContainer>
        )
      }}
    </TimeZoneContext.Consumer>
  )
}

export default AddTimeZone
