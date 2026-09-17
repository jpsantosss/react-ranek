import React from "react";
import { useParams } from "react-router-dom";
import "../css/produto/Produto.css";

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, [params]);

  return (
    <div className="produto-container">
      {produto.fotos ? (
        <>
          <section className="image-section">
            {produto.fotos.map((foto, index) => (
              <div key={index} className="image-item">
                <img src={foto.src} alt={foto.titulo} />
              </div>
            ))}
          </section>
          <section>
            <h1 className="produto-title">{produto.nome}</h1>
            <span className="produto-price">R$ {produto.preco}</span>
            <p className="produto-description">{produto.descricao}</p>
          </section>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Produto;
