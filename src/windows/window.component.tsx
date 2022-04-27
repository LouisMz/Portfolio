import React, { CSSProperties, Fragment, FunctionComponent, useEffect, useState } from 'react';
import "xp.css/dist/XP.css";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../dragType/dragTypes';


const style :CSSProperties = {
  position: 'absolute',
  padding: '0.5rem 1rem',
  width: 800
}

interface Props {
  id : any,
  left: number,
  top: number,
  hideSourceOnDrag?: boolean,
  children: JSX.Element,
  title: string;
  visible: boolean;
  close: () => void;
}

const Window: React.FC<Props> = (props : Props) => {
  
  const [{ isDragging }, drag] = useDrag(() => ({
      type: ItemTypes.WINDOW,
      item: { id: props.id, left: props.left, top: props.top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
    }),
    [props.id, props.left, props.top],
    )

  if (isDragging && props.hideSourceOnDrag) {
    return <div ref={drag}/>
  }

  return (
    props.visible ?
      <div>
        <div
          style={{
            ...style,
            left: props.left,
            top: props.top
          }}
          ref={drag}
          role={'window'}>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">{props.title}</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close" onClick={() => props.close()}></button>
              </div>
            </div>
            <div className="window-body">
              {props.children}
            </div>
          </div>
        </div>
      </div> :
      <Fragment></Fragment>
  );
  
};
export default Window;