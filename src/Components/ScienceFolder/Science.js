import { ScienceNewsApi } from "../ApiFolder/ScienceNewsApi";
import Cards from "../CardsFolder/Cards";
import "./Science.css";

const Science = () => {
  return (
    <>
      <Cards newsApi = {ScienceNewsApi} />
    </>
  )
};

export default Science;