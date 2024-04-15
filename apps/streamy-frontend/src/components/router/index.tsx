
import loglevel from 'loglevel'
import { Microphone } from '../microphone'

import levinstein from 'js-levenshtein'

import { FC, Fragment, ReactNode, useRef } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Home } from '../../screens/home'
import MyListScreen from '../../screens/my-list'
import SearchScreen from '../../screens/search'
import ProfileScreen from '../../screens/profile'
import PopularScreen from '../../screens/popular'
import ComediesScreen from '../../screens/comedies'
import AnimationScreen from '../../screens/animations'
import DramasScreen from '../../screens/dramas'
import SeriesScreen from '../../screens/series'
import NotificationScreen from '../../screens/notifications'

export type Route = {
  path: `/${string}`,
  alias: string[]
  element: ReactNode
}

export const routes: Route[] = [
  {
    path: '/',
    alias: ['Go home', 'Home page', 'Main page', 'Start page'],
    element: <Home />,
  },
  {
    path: '/my-list',
    alias: ['Go to my list', 'My watchlist', 'My favorites', 'Show my list'],
    element: <MyListScreen />,
  },
  {
    path: '/search',
    alias: ["Go to search", "Open search", 'Search :term', 'Find :term'],
    element: <SearchScreen />,
  },
  {
    path: '/profile',
    alias: ['Profile', 'My profile', 'Account', 'Open profile'],
    element: <ProfileScreen />,
  },
  {
    path: '/notifications',
    alias: ['Show notifications', 'Open notifications'],
    element: <NotificationScreen />
  },
  {
    path: '/categories/dramas',
    alias: ['Show dramas', 'Open dramas', 'Dramatic movies', 'Drama films'],
    element: <DramasScreen />,
  },
  {
    path: '/categories/comedies',
    alias: ['Show comedies', 'Open comedies', 'I want to laugh', 'Funny movies', 'Comedy films'],
    element: <ComediesScreen />,
  },
  {
    path: '/categories/animations',
    alias: ['Show animations', 'Open animations', 'animations films', 'I want animations'],
    element: <AnimationScreen />,
  },
  {
    path: '/categories/series',
    alias: ['Show series', 'Open series'],
    element: <SeriesScreen />,
  },
  {
    path: '/categories/new',
    alias: ['Show popular', 'Show new films'],
    element: <PopularScreen />,
  },
];

interface ICreateSpeechRecognition {
  lang: SpeechRecognition['lang']
  onResult(phrase: string): void
}

interface ISpeechRecognitionResultHandler {
  (event: SpeechRecognitionEvent): void
}
// TODO: use confidence rate for better UX

const createSpeechRecognition = ({
  lang,
  onResult,
}: ICreateSpeechRecognition) => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const CONFIDENCE_RATE = 0.8

  if (!SpeechRecognition) {
    loglevel.error('Speech recognition API is not supported in this browser.')
    return
  }

  const speechRecognition = new SpeechRecognition()
  speechRecognition.continuous = false
  speechRecognition.interimResults = false
  speechRecognition.lang = lang

  const start = () => {
    loglevel.debug('Start speech recognition')
    speechRecognition.start()
  }

  const stop = () => {
    loglevel.debug('Stop speech recognition')
    speechRecognition.stop()
  }

  const assemblePhrase: ISpeechRecognitionResultHandler = (event) => {
    loglevel.debug(event.results)

    const transcript = Array.from(event.results)
      .filter(result => result.isFinal && result[0].confidence >= CONFIDENCE_RATE)
      .map(result => result[0].transcript)
      .join(' ')

    onResult(transcript)
    // by default it stops, but we want to make sure
    stop()
  }

  const unsubscribe = () => {
    loglevel.debug('Unsubscribe speech recognition')
    speechRecognition.removeEventListener('result', assemblePhrase)
    speechRecognition.abort()
  }
  speechRecognition.addEventListener('result', assemblePhrase)

  return { start, unsubscribe }
}


const getRouteByPhrase = (routes: Route[], userPhrase: string) => {
  const routesWithWeights = routes.map(route => {
    const aliasWithWeights = route.alias.map(routePhrase => levinstein(userPhrase, routePhrase))
    return ({
      ...route,
      weight: Math.min(...aliasWithWeights)
    })
  })
  const sorted = routesWithWeights.sort((a, b) => a.weight - b.weight)
  const matchedRoute = sorted?.[0].path
  loglevel.debug({ userPhrase, matchedRoute })
  return matchedRoute
}

export const AppRouter: FC = () => {
  const navigate = useNavigate()
  const speechRecognitionRef = useRef(createSpeechRecognition({
    lang: 'en-US',
    onResult(phrase) {
      const route = getRouteByPhrase(routes, phrase)
      navigate(route)
    }
  }))

  return (
    <Fragment>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <FloatingActionButton>
        <Microphone onClick={() => speechRecognitionRef.current?.start()} />
      </FloatingActionButton>
    </Fragment>
  )
}

const FloatingActionButton = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 10;
`