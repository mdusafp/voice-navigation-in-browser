import styled from 'styled-components'

import loglevel from 'loglevel'

import '@radix-ui/themes/styles.css'

import { Fragment } from 'react'
import { Header } from '../components/header'
import { AppRouter } from '../components/router'
import backgroundUrl from '../assets/Hero.png'

loglevel.setLevel('DEBUG')

export function App() {
  return (
    <Fragment>
      <FullPageBackground />
      <PageContainer>
        <Header />
        <PageContent>
          <AppRouter />
        </PageContent>
      </PageContainer>
    </Fragment>
  )
}

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const PageContent = styled.div`
  overflow-x: hidden;
  max-width: 100vw;
  padding: 5rem 0;
  z-index: 1;
  width: 100%;
`

const FullPageBackground = styled.div`
  background-image: url(${backgroundUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.75));
    filter: blur(1px);
    z-index: -1;
  }
`

export default App
