import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Movie from "./Movie";

const MainStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
const CardDivStyle = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  margin-left: 150px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: 0px 0px 5px 1px rgb(204, 204, 204);
  margin-top: 30px;
`;

const CardImageStyle = styled.img`
  background-size: 100% 100%;
  height: 200px;
  width: 400px;
  border-radius: 5px;
  cursor: pointer;
`;

const CardTextStyle = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  align-items: center;
  font-weight: 800;
  margin-left: 30px;
`;

const ButtonStyle = styled.button`
  width: 75px;
  height: 45px;
  border-radius: 5px;
  border: 0px;
  font-size: 15px;
  font-weight: 800;
  color: black;
  background-color: rgb(153, 255, 255);
  cursor: pointer;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  const deleteId = (id) => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, { method: "delete" })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movies) => movies.id !== id));
        }
      });
  };

  return (
    <div>
      <Nav />
      <MainStyle>
        {movies.map((movie) => (
          <CardDivStyle key={movie.id}>
            <Link to={`/MovieDetail/${movie.id}`}>
              <CardImageStyle src={movie.medium_cover_image}></CardImageStyle>
            </Link>
            <CardTextStyle>
              {movie.title}
              <ButtonStyle onClick={() => deleteId(movie.id)}>삭제</ButtonStyle>
            </CardTextStyle>
          </CardDivStyle>
        ))}
      </MainStyle>
    </div>
  );
};

export default MovieList;
