import React, { CSSProperties, FunctionComponent, useState } from 'react';
import "xp.css/dist/XP.css";
import { useDrag } from 'react-dnd';
import { ItemTypes } from './dragTypes';
import ButtonIcon from './buttonIcon.component';


const style :CSSProperties = {
  position: 'absolute',
  padding: '0.5rem 1rem',
}

interface Props {
  id : any,
  left: number,
  top: number,
  hideSourceOnDrag?: boolean,
  children: JSX.Element,
  title: string;
}

const Window: FunctionComponent<Props> =(props : Props) => {

  const [visible, setVisible] = useState<boolean>(false);

  const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.WINDOW,
      item: { id: props.id, left: props.left, top: props.top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
    }),
    [props.id, props.left, props.top],
    )

  if (isDragging && props.hideSourceOnDrag){
    return <div ref={drag}/>
  }

  function handleOpenWindow(){
  setVisible(true)
  }
  
  function handleCloseWindow(){
    setVisible(false);
  }
  
  if (visible){
  return(
    <div>
      <div
        style={{
          ...style,
          left: props.left,
          top: props.top
        }}
        ref={drag}
        role={'window'}>
        <div className="window"  style= {{zIndex: 10}}>
          <div className="title-bar">
            <div className="title-bar-text">{props.title}</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close" onClick={handleCloseWindow}></button>
            </div>
          </div>
          <div className="window-body">
            {props.children}
          </div>
        </div>
      </div>
      <div style= {{zIndex: 1}}>
      <ButtonIcon title={props.title} icon={props.title} open={handleOpenWindow}/>
      </div>
    </div>
    );
  }
  else {
    return(
      <div>
        <ButtonIcon title={props.title} icon={props.title} open={handleOpenWindow}/>
      </div>
    )
  }

};
export default Window;