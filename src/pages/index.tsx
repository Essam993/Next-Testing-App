import StickyNoteApp from '@/components/StickyNotes/StickyNoteApp';
import StopWatch from '@/components/StopWatch';
import WeatherApp from '@/components/WeatherApp';
import { Styledtabs } from '@/styles/global';
import React from 'react';

const App: React.FC = () => {
  // Define an array of tabs with labels and content
  const tabsData = [
    { label: 'Sticky Notes', key: '1', content: <StickyNoteApp /> },
    { label: 'Weather', key: '2', content: <WeatherApp /> },
    { label: 'Stop Watch', key: '3', content: <StopWatch /> },
  ];

  return (
    <Styledtabs tabPosition={'left'} items={tabsData.map((tab) => ({ label: tab.label, key: tab.key, children: tab.content }))} />
  );
};

export default App;
