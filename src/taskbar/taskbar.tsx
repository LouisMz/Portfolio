import React, { FunctionComponent } from "react"
import StartButton from '../img/startButton.png';


const Taskbar: React.FC = () =>{

  let date = new Date();
  let hour = date.getHours()+" : "+date.getMinutes();

  return(
    <div className="taskbarStyle">
      <img src={StartButton} alt='Button start' />
    </div>
  )
}

export default Taskbar;