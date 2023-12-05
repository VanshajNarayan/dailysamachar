import { SportsNewsApi } from "../ApiFolder/SportsNewsApi";
import Cards from "../CardsFolder/Cards";
import "./Sports.css";

const Sports = () => {
  return (
    <>
      <Cards newsApi = {SportsNewsApi} />
    </>
  )
};

export default Sports;