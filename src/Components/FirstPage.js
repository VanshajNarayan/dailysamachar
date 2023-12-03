const FirstPage = ({newsApi}) => {
  return (
    <>
      <h2>This is News Websites</h2>
      {
        newsApi.articles.map((newsData, index) => (
          <p key={index}> {newsData.author} </p>
        ))
      }
    </>
  )
};

export default FirstPage;