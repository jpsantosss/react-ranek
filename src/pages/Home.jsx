import React from "react";
import "../css/home/Home.css"

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
          <img src={produto.fotos[0].src} alt={produto.descricao} className="produto-foto" />
          <h1 className="produto-title">{produto.nome}</h1>
        </div>
      ))}
    </section>
  );
};

export default Home;
