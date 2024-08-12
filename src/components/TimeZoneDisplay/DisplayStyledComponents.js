import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io'

// Base styles for TimeZoneDisplayContainer
export const TimeZoneDisplayContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90vw;
  border: 1px solid #e1e1e1;
  border-radius: 8px;  
  min-height: 10vh;
  padding: 20px; 
  color: dimgrey;
  background-color: ${props => (props.isdarkmode ? '#181818' : 'transparent')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover .close-icon {
    display: block;
  }
`

export const TimeZoneSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TimeZoneNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const TimeZoneAbbreviation = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${props => (props.isdarkmode ? '#ffffff' : 'dimgrey')};
  
  @media (max-width: 477px) {
    font-size: 14px;
  }

  @media (min-width: 478px) and (max-width: 768px) {
    font-size: 15px;
  }
`

export const TimeZoneFullName = styled.span`
  font-size: 18px; 
  color: darkgray;

  @media (max-width: 477px) {
    font-size: 16px;
  }

  @media (min-width: 478px) and (max-width: 768px) {
    font-size: 17px;
  }
`

export const TimeZoneTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DisplayTime = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
  width: 35vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0px;
  color: ${props => (props.isdarkmode ? '#ffffff' : 'dimgrey')};
  background-color: ${props => (props.isdarkmode ? '#26272a' : '#f9f9f9')};

  @media (max-width: 477px) {
    font-size: 16px;
    width: 100%;
  }

  @media (min-width: 478px) and (max-width: 768px) {
    font-size: 17px;
    width: 100%;
  }
`

export const DisplayZoneAndDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30vw;

  @media (min-width: 478px) {
    width: 30vw;
  }

  @media (min-width: 478px) and (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    width: 30vw;
  }
`

export const DisplayZone = styled.span`
  font-weight: bold;
  font-size: 16px; 
  color: darkgray;

  @media (max-width: 477px) {
    font-size: 14px;
  }

  @media (min-width: 478px) and (max-width: 768px) {
    font-size: 15px;
  }
`

export const DisplayDate = styled.span`
  color: grey;
  font-size: 14px;
  color: darkgray; 

  @media (max-width: 477px) {
    font-size: 12px;
  }

  @media (min-width: 478px) and (max-width: 768px) {
    font-size: 13px;
  }
`

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  display: none;
  color: ${props => (props.$isdarkmode ? '#f9f9f9' : '#26272a')};

  &:hover {
    color: ${props => (props.$isdarkmode ? '#f1f1f1' : '#333')};
  }
`
