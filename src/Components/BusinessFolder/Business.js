import { BusinessNewsApi } from "../ApiFolder/BusinessNewsApi";
import Cards from "../CardsFolder/Cards";
import "./Business.css";

const Business = () => {
  return (
    <>
      <Cards newsApi = {BusinessNewsApi} />
    </>
  )
};

export default Business;