import { useEffect } from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import { useState } from 'react';

function App() {
  const [newsApi, setNewsApi] = useState([]);
  const newsApiFx = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=50ee585bf1364c1db2d0b89b0b504a7b");
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      let articlesData = data.articles;
      setNewsApi(articlesData);
    };
  };
  useEffect(() => {
    newsApiFx();
  }, []);
  return (
    <div className="App">
      <FirstPage newsApi = {newsApi} />
    </div>
  );
}

export default App;
