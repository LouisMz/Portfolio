import React, { FunctionComponent, CSSProperties } from "react"


const mainBar: CSSProperties={
    width: '100%',
    height: '4%',
    background: '#4650D1',
    position: 'fixed',
    bottom: 0,
    fontSize: "14px",
    textAlign: 'end',
    justifyContent: 'flex-end',
    color: 'white',
    alignContent: 'center'
}

const startSquare: CSSProperties={
  width: '10%',
  height: '4%',
  background: '#5FBF21',
  fontSize: '22px',
  color: 'White',
  borderBottomRightRadius: 7,
  borderTopRightRadius: 7,
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  alignContent: 'center'
}

const Taskbar: FunctionComponent = () =>{

  let date = new Date();
  let hour = date.getHours()+" : "+date.getMinutes();

  return(
    <div>
      <div style={mainBar}>{hour}</div>
      <div style={startSquare}>Démarrer</div>
    </div>
  )
}

export default Taskbar;