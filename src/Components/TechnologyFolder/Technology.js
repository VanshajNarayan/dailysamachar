import { TechnologyNewsApi } from "../ApiFolder/TechnologyNewsApi";
import Cards from "../CardsFolder/Cards";
import "./Technology.css";

const Technology = () => {
  return (
    <>
      <Cards newsApi = {TechnologyNewsApi} />
    </>
  )
};

export default Technology;