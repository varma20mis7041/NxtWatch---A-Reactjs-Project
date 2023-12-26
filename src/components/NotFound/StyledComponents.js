import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#181818' : ' #f1f1f1')};
`
export const PopupImg = styled.img`
  height: 400px;
  width: 400px;s
`
export const NotFoundText = styled.h1`
  color: ${props =>
    props.title
      ? `${props.darkMode ? '#f9f9f9' : '#313131'}`
      : `${props.darkMode ? '#cccccc' : '#616e7c'}`};
  font-size: ${props => (props.title ? '25px' : '18px')};
  font-weight: 500;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.title ? '20px' : '16px')};
    text-align: center;
  }
`
