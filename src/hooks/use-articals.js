import { useState, useEffect } from "react";

const GET_ARTICLES = "http://localhost:1337/api/articles";

export const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    // getArticles();
  }, []);

  // async function getArticles() {
  //   fetch(GET_ARTICLES)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       return data.data.filter((article) => !!article.data.title);
  //     })
  //     .then((articlses) => setArticles(articlses));
  // }

  async function getArticle(id) {
    fetch(GET_ARTICLES + "/" + id)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((articlse) => setArticle(articlse));
  }

  return { article, articles, getArticle };
};
