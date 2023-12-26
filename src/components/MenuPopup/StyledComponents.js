import styled from 'styled-components'

// export const StyledPopup = styled(Popup)`
//   height: 60vh;
//   width: 80vw;
// `

export const PopupContainer = styled.div`
  display: flex;
transform: translateX(-50%);
  flex-direction:column;
  justify-content:center:
  align-item:center;
`

export const CustomCloseButton = styled.button`
  height: 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Roboto';
  border-width: 0px;
  border-radius: 5px;
  background-color: #4f46e5;
  cursor: pointer;
  margin-bottom: 15px;
`
