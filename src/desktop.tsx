import React, { CSSProperties, FunctionComponent, useCallback, useState } from 'react';
import Window  from './window.component';
import update from "immutability-helper";
import { useDrop, XYCoord } from 'react-dnd';
import { ItemTypes } from './dragTypes';
import { DragItem } from './interfaces';
import Content from './content.component';
import Home from './home.component';
import ButtonIcon from './buttonIcon.component';
import Presentation from './img/001-presentation.png';
import Projet from './img/002-projet.png';
import Cyber from './img/003-cyber.png';
import Etude from './img/004-etude.png';
import Competences from './img/005-competences.png';
import VeilleTechno from './img/006-veilletechnologique.png';
import Documentation from './img/007-documentation.png';
import Contact from './img/008-contact.png';
import MentionLegale from './img/009-mentionlegale.png';

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
    <div className="desktopStyle">
      <div ref={drop}>
        {Object.keys(windows).map((key) =>{
          const {left, top, title } = windows[key];
          return(
            <Window key={key} id={key} left={left} top={top} hideSourceOnDrag={props.hideSourceOnDrag} title={title}>
              <Content icon={title}/>
            </Window>
          )})} 
      </div>
      <div className="iconContainerStyle">
        <ButtonIcon src={Presentation} description={'Qui suis-je'} alt={'Icon Présentation'}/>
        <ButtonIcon src={Projet} description={'Mes Projets'} alt={'Icon Projet'}/>
        <ButtonIcon src={Cyber} description={'Cybersécurité'} alt={'Icon Cybersécurité'}/>
        <ButtonIcon src={Etude} description={'Etudes'} alt={'Icon Etudes'}/>
        <ButtonIcon src={Competences} description={'Compétences'} alt={'Icon Compétences'}/>
        <ButtonIcon src={VeilleTechno} description={'Veille Techno'} alt={'Icon VeilleTechno'}/>
        <ButtonIcon src={Documentation} description={'Documention'} alt={'Icon Documentation'}/>
        <ButtonIcon src={Contact} description={'Contact'} alt={'Icon Contact'}/>
        <ButtonIcon src={MentionLegale} description={'MentionLegale'} alt={'Icon Mention Légale'}/>
      </div>
      <div>
        <Home/>
      </div>
    </div>
  );
};

export default Desktop;