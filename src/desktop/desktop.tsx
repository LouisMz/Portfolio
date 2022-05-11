import React, { useCallback, useEffect, useState } from 'react';
import Window  from '../windows/window.component';
import update from "immutability-helper";
import { useDrop, XYCoord } from 'react-dnd';
import { ItemTypes } from '../dragType/dragTypes';
import { DragItem } from '../interface/interfaces';
import Content from '../windows/component/content.component';
import Home from '../windows/home.component';
import ButtonIcon from '../components/buttonIcon.component';
import Presentation from '../img/Icon/1.png';
import Projet from '../img/Icon/2.png';
import Cyber from '../img/Icon/13.png';
import Competences from '../img/Icon/36.png';
import VeilleTechno from '../img/Icon/38.png';
import Documentation from '../img/Icon/48.png';
import Contact from '../img/Icon/152.png';
import MentionLegale from '../img/Icon/274.png';

interface Props {
  hideSourceOnDrag: boolean;
  windows?: { [key: string]: { top: number; left: number; title: string; }};
}

const Desktop: React.FC <Props> = (props : Props) => {

  const [visible, setVisible] = useState<{[key: string]: boolean}>({});
  
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

  function handleOpenWindow(key : string) {
    const v = {...visible};
    v[key] = true;
    setVisible(v);
  }

  function handleCloseWindow(key : string) {
    const v ={...visible};
    v[key] = false;
    setVisible(v);
  }


  useEffect(() => {
    const windowsState: {[key: string]: boolean} = {};
    Object.keys(windows).forEach(index => windowsState[index] = false)
    setVisible(windowsState)
  }, [])
  
  return(
    <div className="desktopStyle">
      <div ref={drop}>
        {Object.keys(windows).map((key) => (
            visible[key] &&
              <Window
              key={key} id={key} 
              left={windows[key].left} top={windows[key].top} 
              hideSourceOnDrag={props.hideSourceOnDrag} 
              title={windows[key].title} 
              visible={visible[key]}
              close={() => handleCloseWindow(key)}
            >
              <Content icon={windows[key].title}/>
            </Window>
            
        ))}
      <div className="iconContainerStyle">
        <ButtonIcon src={Presentation} description={'Qui suis-je'} alt={'Icon Présentation'} open={() => handleOpenWindow('a')}/>
        <ButtonIcon src={Projet} description={'Mes Projets'} alt={'Icon Projet'} open={() => handleOpenWindow('b')}/>
        <ButtonIcon src={Cyber} description={'Cybersécurité'} alt={'Icon Cybersécurité'} open={() => handleOpenWindow('c')}/>
        <ButtonIcon src={Competences} description={'Compétences'} alt={'Icon Compétences'} open={() => handleOpenWindow('e')}/>
        <ButtonIcon src={VeilleTechno} description={'Veille Techno'} alt={'Icon VeilleTechno'} open={() => handleOpenWindow('f')}/>
        <ButtonIcon src={Documentation} description={'Documention'} alt={'Icon Documentation'} open={() => handleOpenWindow('g')}/>
        <ButtonIcon src={Contact} description={'Contact'} alt={'Icon Contact'} open={() => handleOpenWindow('h')}/>
        <ButtonIcon src={MentionLegale} description={'MentionLegale'} alt={'Icon Mention Légale'} open={() =>handleOpenWindow('i')}/>
      </div>
      <div className="homeContainer">
        <Home/>
      </div>
      </div>
    </div>
  );
};

export default Desktop;