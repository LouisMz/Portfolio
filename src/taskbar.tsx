import React, { FunctionComponent, CSSProperties } from "react"

const Taskbar: FunctionComponent = () =>{

  let date = new Date();
  let hour = date.getHours()+" : "+date.getMinutes();

  return(
    <div className="taskbarStyle">
      <div>{hour}</div>
      <div>Démarrer</div>
    </div>
  )
}

export default Taskbar;