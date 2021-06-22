import React, { CSSProperties, FunctionComponent, useCallback, useState } from 'react';
import Window  from './window.component';
import update from "immutability-helper";
import { useDrop, XYCoord } from 'react-dnd';
import { ItemTypes } from './dragTypes';
import { DragItem } from './interfaces';
import Content from './content.component';
import Home from './home.component';

const styles: CSSProperties = {
  width: '100%',
  height: '819px',
  position: 'relative',
}

interface Props {
  hideSourceOnDrag: boolean;
  windows?: { [key: string]: { top: number; left: number; title: string; }};
}

const Desktop: FunctionComponent<Props> = (props : Props) => {
  


  const [windows, setWindows] = useState<{
    [key : string]: {
      top : number;
      left: number;
      title: string;
  };
  }>({
    a: { top: 20, left: 80, title: "Présentation" },
    b: { top: 50, left: 110, title: "Projets" },
    c: { top: 80, left: 140, title: "Cyber"},
    d: { top : 110, left: 170, title: "Etudes"},
    e: { top : 110, left: 170, title: "Compétences"},
    f: { top : 110, left: 170, title: "Veille Technologique"},
    g: { top : 110, left: 170, title: "Documentation"},
    h: { top : 110, left: 170, title: "Contact"},
    i: { top : 110, left: 170, title: "Mention Légale"},
  });

  const moveWindow = useCallback(
    (id: string, left: number, top: number) => {
      setWindows(
        update(windows, {
          [id]: {
            $merge: { left, top: top}
          }
        })
      );
    },
    [windows, setWindows]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.WINDOW,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveWindow(item.id, left, top);
        return undefined;
      }
    }),
    [moveWindow]
  );

  return(
    <div>
      <div ref={drop} style={styles}>
        {Object.keys(windows).map((key) =>{
          const {left, top, title, } = windows[key];
          return(
            <Window key={key} id={key} left={left} top={top} hideSourceOnDrag={props.hideSourceOnDrag} title={title}>
              <div>
                <Content icon={title}/>
              </div>
            </Window>
          )})} 
      </div>
      <div style={{left: 20}}>
        <Home/>
      </div>àà
    </div>
  );
};

export default Desktop;