import { HealthNewsApi } from "../ApiFolder/HealthNewsApi";
import Cards from "../CardsFolder/Cards";
import "./Health.css";

const Health = () => {
  return (
    <>
      <Cards newsApi = {HealthNewsApi} />
    </>
  )
};

export default Health;