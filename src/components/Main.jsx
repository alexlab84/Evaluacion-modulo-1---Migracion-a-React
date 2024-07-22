import imgSectionOne from '../../public/lpbts-mod05-img01-desk.png';
import imgSectionTwo from '../../public/lpbts-mod05-img04-mob.png';
import imgSectionThree from '../../public/lpbts-mod05-img03-mob.png';


const Main = () => {
    return (
        <main>

      

      <article className="article_1">
        <div className="container_article_1">
          <p className="paragraph_article_1">HISTORIAS, MODA Y ROPA DEPORTIVA</p>
          <h2 className="title_article_1">TU TIENDA DE DEPORTE</h2>
          <p className="paragraph2_article_1">El deporte nos mantiene en forma. Nos mantiene alerta. Nuestra ropa deportiva para hombre y mujer te ofrece las últimas tecnologias, a la altura de tu rendimiento, para que superes tu mejor marca personal.</p>
          <a href="https://adalab.es/">
            <button className="btn">Comprar</button>
          </a>
        </div>
      </article>

      

      <article className="article_2">
        <p className="paragraph_article_2">¡Prepáralos con tus marcas favoritas!</p>
        <h2 id="cole" className="title_article_2">VUELTA AL COLE</h2>

      
        

        <div className="container_grid">
          <section className="section_grid">
            <div className="img_style">
              <img className="images_section" src={imgSectionOne} alt="Niña con mochila"/>
              <p className="section_product">Mochilas escolares</p>
            </div>
          </section>

        

          <section className="section_grid">
            <div className="img_style">
              <img className="images_section" src={imgSectionTwo} alt="Niño con estuches"/>
              <p className="section_product">Estuches</p>
            </div>
          </section>
        
        
          <section className="section_grid">
            <div className="img_style">
              <img className="images_section" src={imgSectionThree} alt="Niña con bolsa de deporte"/>
              <p className="section_product">Bolsas de deporte</p>
            </div>
          </section>
        </div>

        
        <div className="button_grid">
          <a href="https://adalab.es/">
            <button className="btn_2">Empezar ahora</button>
          </a>
        </div>
      </article> 
    </main>
    );
};

export default Main;