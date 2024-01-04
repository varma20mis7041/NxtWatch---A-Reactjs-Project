import styled from 'styled-components'

export const LoginRouteBackgroundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#231f20' : '#f9f9f9')};
`
export const LoginFormCardContainer = styled.form`
  height: 50vh;
  width: 25vw;
  background-color: ${props => (props.darkMode ? '#000000' : '#f8fafc')};
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 8px;
  padding: 45px;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 60vh;
    padding: 25px;
  }
  margin-bottom: 100px;
`
export const LoginPageLogoImgElement = styled.img`
  height: 45px;
  width: 150px;
`
export const LabelElement = styled.label`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.darkMode ? '#f1f5f9' : '#94a3b8')};
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    font-weight: 600;
  }
`

export const ShowPasswordLabelElement = styled.label`
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.darkMode ? '#f1f5f9' : '#181818')};
`

export const LabelInputElement = styled.input`
  height: ${props => (props.checkbox ? '20px' : '40px')};
  width: ${props => (!props.checkbox ? '100%' : null)};
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  border: 1px solid #475569;

  outline: none;
  padding: 10px;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-left: 0px;
  color: #ffffff;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const CustomLoginButton = styled.button`
  height: 40px;
  width: 100%;
  border-width: 0px;
  border-radius: 5px;
  background-color: #4f46e5;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
`
export const CheckBoxContainer = styled.div`
  height: 20px;
  align-self: flex-start;
  display: flex;
  align-items: center;
`
export const ErrorMessage = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #ff0b37;
  margin: 0px;
  align-self: flex-start;
`
export const NoteContainer = styled.div`
  font-family: 'Roboto';
  background-color: ${props => (props.darkMode ? '#000000' : '#ffffff')};
  border-radius: 10px;
  height: 35vh;
  padding: 10px;
`

export const NoteText = styled.p`
  color: ${props => (props.darkMode ? '#f1f5f9' : '#181818')};
  font-family: 'Roboto';
  text-align: ${props => props.greet && 'center'};
`
export const NoteCustomButton = styled.button`
  margin: 0px;
  height: 40px;
  width: 150px;
  border-width: 0px;
  color: #f1f5f9;
  background-color: blue;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
`
export const CloseButton = styled.button`
  padding: 0;
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
`
