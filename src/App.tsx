import React from 'react';
import Computer  from './computer/computer';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  return <DndProvider backend={HTML5Backend}><Computer/></DndProvider>
}

export default App;
