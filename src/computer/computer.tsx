import React, { FunctionComponent, useState } from 'react';
import  Desktop  from '../desktop';
import Taskbar from '../taskbar/taskbar';
import './index.css';

const Computer: React.FC = () =>{
  const [hideSourceOnDrag] = useState(true)

  return (
    <div className="backgroundStyle">
        <Desktop hideSourceOnDrag={hideSourceOnDrag} /> 
        <Taskbar/>
    </div>
  )

}
export default Computer;