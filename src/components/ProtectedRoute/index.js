import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  console.log('protectedRoute')
  const jwtToken = Cookies.get('jwt_token')
  console.log('jwt_token', jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedRoute
