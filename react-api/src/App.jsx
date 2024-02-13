import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css";

function App() {
  const [bookData, setBookData] = useState([]);


  const getData = () => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then((res) => setBookData(res.data.books))
      .catch((err) => {
        console.warn("Status Code = 404");
        console.error("Website not found");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {bookData.map((el, i) => (
          <div key={i} className="main-container">
            <img  className=" imgs-"src={el.imageLinks.thumbnail} alt={el.title} />
            <div className="book-info">
              <h2>{el.title}</h2>
              <p className='description'>{el.description}</p>
              <div className='authors'>
                {el.authors.map((author, index) => (
                  <h3 key={index}>{author}</h3>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
