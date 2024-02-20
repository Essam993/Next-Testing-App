import React from 'react'
import LocalTime from '@/components/LocalTime'
import StickyNoteApp from '@/components/StickyNotes/StickyNoteApp'
import StopWatch from '@/components/StopWatch'
import WeatherApp from '@/components/WeatherApp'
import { Styledtabs } from '@/styles/global'

const App: React.FC = () => {
  const tabsData = [
    { label: 'Sticky Notes', key: '1', content: <StickyNoteApp /> },
    { label: 'Weather', key: '2', content: <WeatherApp /> },
    { label: 'Stop Watch', key: '3', content: <StopWatch /> }
  ]

  return (
    <>
      <LocalTime />
      <Styledtabs tabPosition="left" items={tabsData.map((tab) => ({ label: tab.label, key: tab.key, children: tab.content }))} />
    </>
  )
}

export default App
