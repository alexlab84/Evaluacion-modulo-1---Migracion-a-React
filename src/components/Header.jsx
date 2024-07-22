import { useState } from 'react';
import icoMenu from '../../public/ico-menu.svg';
import icoScrollDown from '../../public/ico-scroll-down.svg';


const Header = () => {

    const [  claseEstado, setClaseEstado  ] = useState('hidden')

    const handleClickHeader = () => {
        console.log('click');
        if( claseEstado === 'hidden' ) {
          setClaseEstado( 'shown' );
        }
        else {
          setClaseEstado('hidden');
        }
      }
    
    //   return (
    //     <div>
    //       <button onClick={handleClickHamb}>Hamb</button>
    //       <div className={claseEstado}>
    //         <button onClick={handleClickVolver}>Volver</button>
    //       </div>
    //     </div>
    //   );
    //}


    return (
        <header className="header" id="inicio"> 
      <div className="fixed">
        
          <button className="burguer_button" onClick={handleClickHeader}>  
             <img src={icoMenu} alt="Icono menu hamburguesa"/> 
          </button>
         
            <ul className={claseEstado}>
                <li className=''>
                    <a href="#" className='liNueva'>Patata</a>
                </li>
                <li>
                    <a href="#" className='liNueva'>Pepino</a>
                </li>
                <li>
                    <a href="#" className='liNueva'>Pimiento</a>
                </li>
                <li>
                    <a href="#" className='liNueva'>Tomate</a>
                </li>
            </ul>
             
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