import contatoImage from "../assets/img/contato.jpg";
import "../css/contato/Contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      <img src={contatoImage} alt="Máquina de escrever" className="contato-image" />
      <section>
        <h1 className="contato-title">Entre em contato.</h1>
        <ul className="contato-list">
          <li className="contato-item">
            <a href="mailto:jpedrosantosoliv@gmail.com">jpedrosantosoliv@gmail.com</a>
          </li>
          <li className="contato-item">
            <a href="http://github.com/jpsantosss" target="_blank">github.com/jpsantosss</a>
          </li>
          <li className="contato-item">Rio de Janeiro, Brasil</li>
        </ul>
      </section>
    </div>
  );
};

export default Contato;
