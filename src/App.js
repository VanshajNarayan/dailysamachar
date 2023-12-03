import { useEffect } from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import { useState } from 'react';

function App() {
  const [newsApi, setNewsApi] = useState([]);
  useEffect(() => {
    try {
      fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=50ee585bf1364c1db2d0b89b0b504a7b").then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const data = response.json();
          return data;
        }
      }).then((data) => {
        const articlesData = data.articles;
        return articlesData;
      }).then((articlesData) => {
        setNewsApi(articlesData);
      })
    } catch (error) {
      console.log("something is wrong");
    };
  }, []);
  return (
    <div className="App">
      <FirstPage newsApi = {newsApi} />
    </div>
  );
}

export default App;
