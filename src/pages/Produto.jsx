import React from "react";
import { useParams } from "react-router-dom";
import "../css/produto/Produto.css";
import useFetch from "../hooks/useFetch";

const Produto = () => {
  const params = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [request, params]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return (
    <div className="produto-container">
      {data.fotos ? (
        <>
          <section className="image-section">
            {data.fotos.map((foto, index) => (
              <div key={index} className="image-item">
                <img src={foto.src} alt={foto.titulo} />
              </div>
            ))}
          </section>
          <section>
            <h1 className="produto-title">{data.nome}</h1>
            <span className="produto-price">R$ {data.preco}</span>
            <p className="produto-description">{data.descricao}</p>
          </section>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
  else return null;
};

export default Produto;
