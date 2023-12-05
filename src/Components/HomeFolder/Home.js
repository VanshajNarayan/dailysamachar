import Cards from "../CardsFolder/Cards";
import { NewsApi } from "../NewsApiPage";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Cards newsApi = {NewsApi} />
    </>
  )
};

export default Home;