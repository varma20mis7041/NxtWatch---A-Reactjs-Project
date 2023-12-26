import Loader from 'react-loader-spinner'

import CustomLoaderContainer from './StyledComponents'

const LoadingView = () => (
  <CustomLoaderContainer className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
  </CustomLoaderContainer>
)
export default LoadingView
