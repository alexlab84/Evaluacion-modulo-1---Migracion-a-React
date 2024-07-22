import icoArrow from '../../public/ico-arrow.svg';

const Footer = () => {
    return (
        <footer className="footer">
      <div className="scroll_footer">
        <a href="#inicio">
          <button className="scroll_down ico-arrow">
            <img src={icoArrow} alt="icono scroll"/>
          </button> 
        </a>  
      </div>
      <nav className="nav">
        <ul className="ul">
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">ZAPATILLAS</a></li>
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">ROPA</a></li>
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">NIÑO/A</a></li>
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">DESTACADOS</a></li>
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">TIPS</a></li>
        </ul>
      
      
        <ul className="ul">
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">TWITTER</a></li>
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">INSTAGRAM</a></li>
          <li className="list_link"><a className="link_decoration" href="https://adalab.es/">YOUTUBE</a></li>
        </ul>

    
        <ul className="ul ul_3">
          <li>&copy;2024</li>
          <li>we id you</li>
        </ul>
      </nav>

    </footer>
    );
};

export default Footer;