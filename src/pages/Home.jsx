import React from "react";
import { Link } from "react-router-dom";
import "../css/home/Home.css";

const Home = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  console.log(produtos);

  return (
    <section className="home-container">
      {produtos.map((produto) => (
        <div key={produto.id}>
          <Link to={`produto/${produto.id}`} className="link-item">
            <img src={produto.fotos[0].src} alt={produto.descricao} className="produto-foto" />
            <h1 className="produto-title">{produto.nome}</h1>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Home;
