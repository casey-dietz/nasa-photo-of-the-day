import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture.js"


function App() {
  const [image, setImage] = useState([])

  useEffect(() => {
    const data = axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then((response) => {
          console.log(response)
          setImage(response.data)
      })
        .catch((error) => {
          console.log("Failed!", error)
        })
        console.log(data)
  },[])

  return (
    <div className="App">
      <Picture 
      key={image.id}
      date={image.date}
      explanation={image.explanation}
      title={image.title}
      url={image.url}
      copyright={image.copyright}
      />
    </div>
  );
}

export default App;
