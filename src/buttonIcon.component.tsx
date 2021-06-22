import React, { CSSProperties, FunctionComponent } from "react";
import Presentation from './img/001-presentation.png';
import Projet from './img/002-projet.png';
import Cyber from './img/003-cyber.png';
import Etude from './img/004-etude.png';
import Competences from './img/005-competences.png';
import VieilleTechno from './img/006-veilletechnologique.png';
import Documentation from './img/007-documentation.png';
import Contact from './img/008-contact.png';
import MentionLegale from './img/009-mentionlegale.png';

interface Props{
    title: string,
    open: () => void
    icon: string;
}

const ButtonIcon: FunctionComponent<Props> = (props : Props) =>{

    if (props.icon === 'Présentation'){
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 10, top: 10}}>
                <img src={Presentation} alt={'Icon présentation'} onDoubleClick={props.open}/>
                <p>Qui suis-je?</p>
            </div>
        );
    }
    if (props.icon === 'Projets') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 12, top: 150}}>
                <img src={Projet} alt={'Icon projet'} onDoubleClick={props.open}/>
                <p>Mes projets</p>
            </div>
        );
    }
    if (props.icon === 'Cyber') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 7, top: 290}}>
                <img src={Cyber} alt={'Icon cybersécurité'} onDoubleClick={props.open}/>
                <p>Cybersécurité</p>
            </div>
        );
    }
    if (props.icon === 'Etudes') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 150, top: 10}}>
                <img src={Etude} alt={'Icon étude'} onDoubleClick={props.open}/>
                <p>Mes études</p>
            </div>
        );
    }
    if (props.icon === 'Compétences') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 130, top: 150}}>
                <img src={Competences} alt={'Icon compétences'} onDoubleClick={props.open}/>
                <p>Mes Compétences</p>
            </div>
        );
    }
    if (props.icon === 'Veille Technologique') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 125, top: 290}}>
                <img src={VieilleTechno} alt={'Icon VeilleTechnologique'} onDoubleClick={props.open}/>
                <p>Veille Technologique</p>
            </div>
        );
    }
    if (props.icon === 'Documentation') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 265, top: 10}}>
                <img src={Documentation} alt={'Icon Documentation'} onDoubleClick={props.open}/>
                <p>Mes documentations</p>
            </div>
        );
    }
    if (props.icon === 'Contact') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 283, top: 150}}>
                <img src={Contact} alt={'Icon Contact'} onDoubleClick={props.open}/>
                <p>Me contacter</p>
            </div>
        );
    }
     if (props.icon === 'Mention Légale') {
        return(
            <div style={{position: 'absolute', color: 'white', textAlign: 'center', left: 260, top: 290}}>
                <img src={MentionLegale} alt={'Icon mentionLégale'} onDoubleClick={props.open}/>
                <p>Les mentions légales</p>
            </div>
        );
    }
    else return null;
}

export default ButtonIcon;  