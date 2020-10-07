import React, { useState } from "react";
import styled from "styled-components";
import Nav from "./components/Nav";

const MainStyle = styled.div``;

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

const SearchInput = styled.input`
  width: 800px;
  height: 45px;
  border-radius: 5px 5px 5px 5px;
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

const SpanStyle = styled.span`
  font-size: 20px;
  font-weight: 800;
`;

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function inputHandle(e) {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  }

  function submitMovie(e) {
    e.preventDefault();
    console.log(movie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("저장되었습니다.");
          setMovie({
            title: "",
            rating: "",
            medium_cover_image: "",
            summary: "",
          });
        }
      });
  }

  return (
    <MainStyle>
      <Nav />
      <SearchDivStyle>
        <table>
          <tr>
            <SpanStyle>영화제목</SpanStyle>
          </tr>
          <tr>
            <td>
              <SearchInput
                type="text"
                onChange={inputHandle}
                name="title"
                value={movie.title}
                placeholder="영화제목"
              />
            </td>
          </tr>
          <SpanStyle>평점</SpanStyle>
          <tr>
            <td>
              <SearchInput
                type="number"
                onChange={inputHandle}
                name="rating"
                value={movie.rating}
                placeholder="평점"
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
                value={movie.summary}
              />
            </td>
          </tr>
          <SpanStyle>사진링크</SpanStyle>
          <tr>
            <td>
              <SearchInput
                type="text"
                onChange={inputHandle}
                name="medium_cover_image"
                value={movie.medium_cover_image}
                placeholder="이미지링크"
              />
            </td>
          </tr>
        </table>
        <ButtonDivStyle>
          <ButtonStyle onClick={submitMovie}>등록</ButtonStyle>
        </ButtonDivStyle>
      </SearchDivStyle>
    </MainStyle>
  );
};

export default Movie;
