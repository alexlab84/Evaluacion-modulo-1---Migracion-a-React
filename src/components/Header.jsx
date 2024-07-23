import { useState } from 'react';
import icoMenu from '../../public/ico-menu.svg';
import icoScrollDown from '../../public/ico-scroll-down.svg';
import Link from './Link';

const Header = () => {

    const [  classState, setclassState  ] = useState('hidden')

    const handleClickHeader = () => {
        if( classState === 'hidden' ) {
          setclassState( 'shown' );
        }
        else {
          setclassState('hidden');
        }
      }
    



    return (
        <header className="header" id="inicio"> 
      <div className="fixed">
        
          <button className="burguer_button" onClick={handleClickHeader}>  
             <img src={icoMenu} alt="Icono menu hamburguesa"/> 
          </button>
          <nav>
            <ul className={classState}>
            
                <Link link='https://adalab.es/bootcamp-programacion' text='bootcamp programacion' openInNewTab={false}/>
                <Link link='https://adalab.es/bootcamp-data' text='bootcamp data analytics' openInNewTab={true}/>
                <Link link='https://adalab.es/testimonios' text='testimonios' openInNewTab={false}/>
                <Link link='https://adalab.es/blog' text='blog' openInNewTab={true}/>

            </ul>
            </nav>  
      </div>
      <div className="container">
        <h1 className="title_header">COMIENZOS</h1>
        <h1 className="title_header2">COMPARTIDOS</h1>
        <p className="paragraph-title">Todo lo que necesitan para volver al cole con ilusion</p>
        <a href="#cole">  
          <button className="scroll_down">
            <img src={icoScrollDown} alt="icono scroll"/> 
          </button>
        </a>  
      </div>
    </header> 
    );
};

export default Header;