import styled from 'styled-components'

export const LeftSideBarDesktopViewContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LeftSideBarMobileViewContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
