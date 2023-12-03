import './App.css';
import FirstPage from './Components/FirstPage';
import { NewsApi } from './Components/NewsApiPage';

function App() {
  return (
    <div className="App">
      <FirstPage newsApi = {NewsApi} />
    </div>
  );
}

export default App;
