import { EntertainmentNewsApi } from "../ApiFolder/EntertainmentNewsApi";
import Cards from "../CardsFolder/Cards";
import "./Entertainment.css";

const Entertainment = () => {
  return (
    <>
      <Cards newsApi = {EntertainmentNewsApi} />
    </>
  )
};

export default Entertainment;