import React, { FunctionComponent, useState } from 'react';
import  Desktop  from './desktop';
import Taskbar from './taskbar';
import './index.css';

const Computer: FunctionComponent = () =>{
  const [hideSourceOnDrag] = useState(true)

  return (
    <div className="backgroundStyle">
        <Desktop hideSourceOnDrag={hideSourceOnDrag} /> 
        <Taskbar/>
    </div>
  )

}
export default Computer;