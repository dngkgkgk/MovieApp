const { useState, useEffect } = require("react");

const [movies, setMovies] = useState([]);

useEffect(() => {
  fetch("http://10.100.102.2:8000/api/movie")
    .then((res) => res.json())
    .then((res) => {
      setMovies(res);
    });
}, []);
