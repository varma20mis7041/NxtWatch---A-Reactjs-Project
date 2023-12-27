import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {Component} from 'react'
import {
  LoginRouteBackgroundContainer,
  LoginFormCardContainer,
  LoginPageLogoImgElement,
  LabelElement,
  LabelInputElement,
  LabelContainer,
  CustomLoginButton,
  CheckBoxContainer,
  ShowPasswordLabelElement,
  ErrorMessage,
} from './StyledComponents'

import AppContext from '../../context/AppContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = errMsg => {
    this.setState({errorMsg: errMsg, showErrorMsg: true})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    //   console.log('response from login api:', response.ok)
    const result = await response.json()
    if (response.ok === true) {
      this.loginSuccess(result.jwt_token)
    } else {
      this.loginFailure(result.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      isShowPassword,
      errorMsg,
      showErrorMsg,
    } = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {darkMode} = value

          const token = Cookies.get('jwt_token')
          if (token !== undefined) {
            return <Redirect to="/" />
          }

          return (
            <LoginRouteBackgroundContainer darkMode={darkMode}>
              <LoginFormCardContainer
                darkMode={darkMode}
                onSubmit={this.onSubmitLoginForm}
              >
                <LoginPageLogoImgElement
                  src={`${
                    darkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }`}
                  alt="website logo"
                />
                <LabelContainer>
                  <LabelElement darkMode={darkMode} htmlFor="username">
                    USERNAME
                  </LabelElement>
                  <LabelInputElement
                    id="username"
                    type="text"
                    placeholder="Username"
                    darkMode={darkMode}
                    value={username}
                    onChange={this.onChangeUserName}
                  />
                </LabelContainer>
                <LabelContainer>
                  <LabelElement darkMode={darkMode} htmlFor="password">
                    PASSWORD
                  </LabelElement>
                  <LabelInputElement
                    id="password"
                    type={`${isShowPassword ? 'text' : 'password'}`}
                    placeholder="Password"
                    darkMode={darkMode}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                </LabelContainer>
                <CheckBoxContainer>
                  <LabelInputElement
                    type="checkbox"
                    id="show_password"
                    checkbox
                    onClick={this.onClickShowPassword}
                  />
                  <ShowPasswordLabelElement
                    htmlFor="show_password"
                    darkMode={darkMode}
                  >
                    Show Password
                  </ShowPasswordLabelElement>
                </CheckBoxContainer>
                <CustomLoginButton type="submit">Login</CustomLoginButton>
                <ErrorMessage>{showErrorMsg && `*${errorMsg}`}</ErrorMessage>
              </LoginFormCardContainer>
            </LoginRouteBackgroundContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Login
