import React, { FunctionComponent } from 'react';
import Presentation from './presentation.component';

interface Props{
  icon: string;
}

const Content : FunctionComponent<Props> = (props : Props) =>{
  
  if (props.icon === 'Présentation'){
    return(
        <div className="presenation">
          <Presentation/>
        </div>
    );
}
  if (props.icon === 'Projets') {
    return(
      <div>
        Projets
      </div>
  );
  }
  if (props.icon === 'Cyber') {
    return(
      <div>
        Cyber
      </div>
  );
  }
  if (props.icon === 'Etudes') {
    return(
      <div>
        Etudes
      </div>
  );
  }
  if (props.icon === 'Compétences') {
    return(
      <div>
        Compétences
      </div>
  );
  }
  if (props.icon === 'Veille Technologique') {
    return(
      <div>
        Veille
      </div>
  );
  }
  if (props.icon === 'Documentation') {
    return(
      <div>
      </div>
  );
  }
  if (props.icon === 'Contact') {
    return(
      <div>
      </div>
  );
  }
  if (props.icon === 'Mention Légale') {
    return(
      <div>
      </div>
  );
  }
  else return null;
}

export default Content;