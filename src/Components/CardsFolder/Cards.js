import "./Cards.css";

const Cards = ({newsApi}) => {


  return (
    <>
      <section className="card_Section">
        <div className="cardBox">

          {
            newsApi.articles.map((data, index) => (
              <a href={data.url} rel="noreferrer" target="_blank" key={index} style={{textDecoration:'none'}} >

              <div className="cards" key={index}>
            <div className="imgBox">
              <img
                src={data.urlToImage ? data.urlToImage : `https://i.redd.it/r3o4grt9hj451.png`}
                alt="news logo"
                width="100%"
                />
            </div>
            <div className="textContent">
              <h3 className="title"> {data.title.slice(0, 50)}... </h3>
              <p className="dateTime"> {data.source.name} : {data.author === null ? "unknow author" : data.author} </p>
              <h5 className="description"> {data.description === null ? "A paragraph can be considered as empty..." : data.description.slice(0, 80)}... </h5>
            </div>
          </div>
              </a>
            ))
          }

        </div>
      </section>
    </>
  )
};

export default Cards;