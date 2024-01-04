import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const CustomTabItem = styled.li`
  width: 100%;
  border-width: 0px;
  margin: 0px;
  padding: 8px 0px 8px 20px;
  background-color: ${props =>
    props.isActive
      ? `${props.darkMode ? '#424242' : '#f1f5f9'}`
      : 'transparent'};
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: ${props => (props.isActive ? '500' : 450)};
  color: ${props =>
    props.isActive
      ? `${props.darkMode ? '#f9f9f9' : '#313131'}`
      : `${props.darkMode ? '#cccccc' : '#616e7c'}`};
  font-family: 'Roboto';
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1400px) {
    padding-left: 5px 0px 5px 8px;
  }
  @media screen and (max-width: 600px) {
    width: 80vw;
    font-size: 15px;
  }
`

export const ReactIcon = styled.span`
  margin-right: 25px;
  color: ${props =>
    props.isActive ? ' #ff0000' : `${props.darkMode ? '#909090' : '#616e7c'}`};
  @media screen and (max-width: 1400px) {
    margin-right: 10px;
  }
`
