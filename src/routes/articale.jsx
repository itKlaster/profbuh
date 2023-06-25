import { useParams } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";
// import { useEffect } from "react";
import { useArticles } from "../hooks/use-articals";
import { useEffect, useState } from "react";
import { useExpandedImage } from "../hooks/use-expanded-image";
import { ExpandedImage } from "../components/expanded-image";
import { ExpandedImageContext } from "../context";
import { Link } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export const Article = () => {
  let { id } = useParams();
  const [topics, setTopics] = useState();
  const { article, getArticle } = useArticles();
  const fullImage = useExpandedImage();

  useEffect(() => {
    getArticle(id);
  }, []);

  useEffect(() => {
    if (article) {
      console.log('art', article)
      setTimeout(() => {
        const newTopics = article.data.data.topics.map((topic) => ({
          title: topic.title,
          images: topic.images,
          paragraphs: topic.paragraphs.split("\n").map((line) => {
            const regex = /^\[(\d{1,2}:\d{2}:\d{2})\s*-\s*(\d{1,2}:\d{2}:\d{2})\]\s*(.*)$/;
            const found = line.match(regex);

            if (!found) return {
              text: line,
              from: null
            }


            return {
              fallback: found[0],
              from: found[1],
              to: found[2],
              text: found[3],
            }
          }),
          start: topic.start,
          end: topic.end,
        }));

        setTopics(newTopics);
      }, 200)
    }
  }, [article]);

  return (
      <ExpandedImageContext.Provider value={fullImage}>
        {fullImage.image && <ExpandedImage />}
      </ExpandedImageContext.Provider>
      <div className="w-container px-2 flex justify-center items-start mt-10 flex-col">
        <Link to="/">
          <Button className="flex items-center gap-2">
            <ArrowLongLeftIcon className="w-4 h-4" /> Назад
          </Button>
        </Link>
        <Typography className="mb-8 text-4xl text-left font-bold text-textColor-100 mt-10">
          {article?.data.title}
        </Typography>
        <Typography className="">{article?.data.description}</Typography>
        <div className="mt-5">
          <span className="text-textColor-100 text-2xl"> Содержание:</span>
          {article?.data.topics.map((topic, index) => (
            <li key={index} className="mt-2">
              <a className="underline hover:text-main" href={"#" + index}>
                {topic.title}
              </a>
    <>
      <header class="container mx-auto py-10 flex justify-between">
        <div class="logo text-4xl font-black">БухЭксперт8</div>
        <nav>
          <ul class="flex gap-x-3">
            <li>
              <button class="btn btn-primary px-10 py-2 rounded-lg text-white">Главная</button>
            </li>
          ))}
        </div>
        <div className="w-full flex flex-col gap-20 mb-20 mt-14">
          {topics?.map((topic, index) => (
            <div key={index} className="" id={index}>
              <Typography className="font-normal mb-4 text-2xl text-left text-textColor-100 mt-5">
                {topic.title}
              </Typography>
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-2">
                  {topic.images.map((image, index) => (
                    <div
                      key={index}
                      className="m-0 rounded-xl flex-grow"
                      onClick={() =>
                        fullImage.showImage("data:image/png;base64," + image)
                      }
                    >
                      <img
                        className="w-full h-full object-cover rounded-md cursor-pointer"
                        src={"data:image/png;base64," + image}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="font-normal mb-8 flex flex-col ">
                  {topic.paragraphs.map(({ time, text }, index) => (
                    <div key={index} className="flex gap-5 mt-2">
                      <a
                        href="#"
                        className="p-1 px-2 hover:bg-main bg-bgColor-200 text-textColor-100 self-start rounded-md"
                      >
                        {time}
                      </a>
                      <p>{text}</p>
                    </div>
                  ))}

                  <span className="bg-blue-400 self-start rounded px-4 py-2 mt-5 cursor-pointer text-textColor-100">
                    {topic.start} - {topic.end}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
