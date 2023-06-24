import { useState, useEffect } from "react";
import articleData from "./cringe.json";
import articlesData from "./asd.json";

const GET_ARTICLES = "http://192.168.1.210:1337/api/articles";

export const useArticles = () => {
  const [articles] = useState(articlesData.data);
  const [article, setArticle] = useState(articleData.data);

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
