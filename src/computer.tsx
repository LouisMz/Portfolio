import React, { CSSProperties, FunctionComponent, useState } from 'react';
import  Desktop  from './desktop';
import Background from './windows-xp-hd.jpg'
import Taskbar from './taskbar';
import Presentation from './presentation.component';


const Computer: FunctionComponent = () =>{
  const [hideSourceOnDrag] = useState(true)

  return (
    <div>
      <div>
        <img src={Background} alt={'Photo bureau'} style={{ position:'absolute', width: '100%', height: '100%'}}/>
        <Desktop hideSourceOnDrag={hideSourceOnDrag} /> 
      </div>
      <div>
        <Taskbar/>
      </div>
    </div>
  )

}
export default Computer;