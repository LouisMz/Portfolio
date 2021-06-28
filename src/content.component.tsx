import React, { FunctionComponent } from 'react';
import Competence from './competence.component';
import Contact from './contact.component';
import Cyber from './cyber.component';
import Documentation from './documentation.component';
import Mention from './mention.component';
import Presentation from './presentation.component';
import Projet from './projet.component';
import Veille from './veille.component';

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
        <Projet/>
      </div>
  );
  }
  if (props.icon === 'Cyber') {
    return(
      <div>
        <Cyber/>
      </div>
  );
  }
  if (props.icon === 'Compétences') {
    return(
      <div>
        <Competence/>
      </div>
  );
  }
  if (props.icon === 'Veille Technologique') {
    return(
      <div>
        <Veille/>
      </div>
  );
  }
  if (props.icon === 'Documentation') {
    return(
      <div>
        <Documentation/>
      </div>
  );
  }
  if (props.icon === 'Contact') {
    return(
      <div>
        <Contact/>
      </div>
  );
  }
  if (props.icon === 'Mention Légale') {
    return(
      <div>
        <Mention/>
      </div>
  );
  }
  else return null;
}

export default Content;