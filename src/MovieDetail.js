import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";

const SearchDivStyle = styled.div`
  background-color: white;
  width: 850px;
  height: 560px;
  display: inline-block;
  background-color: white;
  position: relative;
  top: 90px;
  left: 530px;
  padding: 20px 30px;
  border-radius: 6px;
  box-shadow: 0px 2px 2px 0 rgb(214, 214, 214);
`;
const SpanStyle = styled.span`
  font-size: 20px;
  font-weight: 800;
`;

const SearchInput = styled.input`
  width: 800px;
  height: 45px;
`;
const SearchAreaStyle = styled.textarea`
  width: 800px;
  height: 200px;
  border-radius: 5px;
`;
const ButtonDivStyle = styled.div`
  display: grid;
  justify-content: end;
  padding: 20px 0px;
`;

const ButtonStyle = styled.button`
  width: 70px;
  height: 45px;
  background-color: rgb(153, 255, 255);
  border-radius: 6px;
  font-weight: 800;
  font-size: 15px;
  color: white;
  border: 0px;
  cursor: pointer;
`;

const MovieDetail = (props) => {
  console.log("Post()");
  const id = props.match.params.id;

  const [movies, setMovies] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function inputHandle(e) {
    setMovies({
      ...movies,
      [e.target.name]: e.target.value,
    });
  }

  function submitMovie(e) {
    e.preventDefault();

    fetch("http://10.100.102.2:8000/api/movie/" + movies.id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movies),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("수정성공하셨습니다.");
        }
      });
  }

  useEffect(() => {
    fetch("http://10.100.102.2:8000/api/movie/" + id)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
        console.log();
      });
  }, []);

  return (
    <div>
      <Nav />
      <SearchDivStyle key={movies.id}>
        <table>
          <SpanStyle>사진링크</SpanStyle>
          <tr>
            <td>
              <SearchInput
                type="text"
                placeholder="이미지링크"
                onChange={inputHandle}
                name="medium_cover_image"
                value={movies.medium_cover_image}
              />
            </td>
          </tr>
          <tr>
            <SpanStyle>제목</SpanStyle>
          </tr>
          <tr>
            <td>
              <SearchInput
                type="text"
                onChange={inputHandle}
                placeholder="영화제목"
                name="title"
                value={movies.title}
              />
            </td>
          </tr>
          <SpanStyle>평점</SpanStyle>
          <tr>
            <td>
              <SearchInput
                type="text"
                placeholder="평점"
                onChange={inputHandle}
                name="rating"
                value={movies.rating}
              />
            </td>
          </tr>
          <SpanStyle>줄거리</SpanStyle>
          <tr>
            <td>
              <SearchAreaStyle
                cols="40"
                rows="5"
                type="text"
                onChange={inputHandle}
                placeholder="줄거리"
                name="summary"
                value={movies.summary}
              />
            </td>
          </tr>
        </table>
        <ButtonDivStyle>
          <ButtonStyle onClick={submitMovie}>수정</ButtonStyle>
        </ButtonDivStyle>
      </SearchDivStyle>
    </div>
  );
};

export default MovieDetail;
