import React, { FunctionComponent } from "react"

const Taskbar: FunctionComponent = () =>{

  let date = new Date();
  let hour = date.getHours()+" : "+date.getMinutes();

  return(
    <div className="taskbarStyle">
      <div className="taskbarBlue">{hour}</div>
      <div className="startButton">Démarrer</div>
    </div>
  )
}

export default Taskbar;