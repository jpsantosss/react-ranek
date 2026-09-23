import React from "react";
import { Link } from "react-router-dom";
import "../css/home/Home.css";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request("https://ranekapi.origamid.dev/json/api/produto");
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return (
    <section className="home-container animeLeft">
      {data.map((data) => (
        <div key={data.id}>
          <Link to={`produto/${data.id}`} className="link-item">
            <img src={data.fotos[0].src} alt={data.descricao} className="produto-foto" />
            <h1 className="produto-title">{data.nome}</h1>
          </Link>
        </div>
      ))}
    </section>
  );
  else return null;
};

export default Home;
