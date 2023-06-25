import { useParams } from "react-router-dom";
import { Typography, Button } from "@material-tailwind/react";
// import { useEffect } from "react";
import { useArticles } from "../hooks/use-articals";
import { useEffect, useState } from "react";
import { useExpandedImage } from "../hooks/use-expanded-image";
import { ExpandedImage } from "../components/expanded-image";
import { ExpandedImageContext } from "../context";
import { Link } from "react-router-dom";

export const Article = () => {
  const [time, setTime] = useState(true);
  let { id } = useParams();
  const [topics, setTopics] = useState();
  const { article, getArticle } = useArticles();
  const fullImage = useExpandedImage();

  function handleClickTime() {
    setTime((prev) => !prev);
  }

  function handlePrint() {
    window.print();
  }

  console.log(article.data?.url);

  useEffect(() => {
    getArticle(id);
  }, []);

  useEffect(() => {
    if (article) {
      console.log("art", article);
      setTimeout(() => {
        const newTopics = article.data.data.topics.map((topic) => ({
          title: topic.title,
          images: topic.images,
          paragraphs: topic.paragraphs.split("\n").map((line) => {
            const regex =
              /^\[(\d{1,2}:\d{2}:\d{2})\s*-\s*(\d{1,2}:\d{2}:\d{2})\]\s*(.*)$/;
            const found = line.match(regex);

            if (!found)
              return {
                text: line,
                from: null,
              };

            return {
              fallback: found[0],
              from: found[1],
              to: found[2],
              text: found[3],
            };
          }),
          start: topic.start,
          end: topic.end,
        }));

        setTopics(newTopics);
      }, 200);
    }
  }, [article]);

  return (
    <>
      <div className="container mx-auto text-textColor-200 print:text-black">
        <ExpandedImageContext.Provider value={fullImage}>
          {fullImage.image && <ExpandedImage />}
        </ExpandedImageContext.Provider>
        <div className=" px-2 flex justify-center items-start mt-10 flex-col">
          <div className="flex justify-end w-full gap-5 print:hidden px-2">
            <Button onClick={handlePrint}>распечатать</Button>
            <Button
              onClick={handleClickTime}
              className="flex items-center gap-2"
            >
              время
            </Button>
            <Link to={"/article/" + id + "/html"}>
              <Button className="flex items-center gap-2">html</Button>
            </Link>
          </div>
          <Typography className="mb-8 text-4xl text-left font-bold text-textColor-100 mt-10 print:text-black">
            {article?.data?.data?.title}
          </Typography>
          <Typography className="">{article?.data?.description}</Typography>
          <div className="mt-5">
            <span className="text-textColor-100 text-2xl print:text-black">
              Содержание:
            </span>
            {article?.data?.data?.topics?.map((topic, index) => (
              <li key={index} className="mt-2">
                <a className="underline hover:text-main" href={"#" + index}>
                  {topic.title}
                </a>
              </li>
            ))}
          </div>
          <div className="w-full flex flex-col gap-20 mb-20 mt-14">
            {topics?.map((topic, index) => (
              <div key={index} className="" id={index}>
                <Typography className="font-normal mb-4 text-2xl text-left text-textColor-100 mt-5 print:text-black">
                  {topic.title}
                </Typography>
                <div className="flex flex-col gap-5 ">
                  <div className="font-normal mb-8 flex flex-col ">
                    {topic.paragraphs.map(({ from, text }, index) => (
                      <div key={index} className="flex gap-5 mt-2 items-center">
                        {from && time ? (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={
                              article.data?.url
                                ? article.data?.url +
                                  "&t=" +
                                  from.split(":")[0] +
                                  "h" +
                                  from.split(":")[1] +
                                  "m" +
                                  from.split(":")[2] +
                                  "s"
                                : "#"
                            }
                            className="p-1 px-2 hover:bg-main bg-bgColor-200 text-textColor-100 self-start rounded-md print:text-black"
                          >
                            {from}
                          </a>
                        ) : null}
                        <p className={from ? "ml-0" : "ml-[103px]"}>{text}</p>
                      </div>
                    ))}
                    {time && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={article.data?.url || "#"}
                        className="mt-5 cursor-pointer"
                      >
                        <span className="bg-blue-400 self-start rounded px-4 py-2 text-textColor-100">
                          {topic.start} - {topic.end}
                        </span>
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 print:flex-col print:gap-y-5">
                    {topic.images.map((image, index) => (
                      <div
                        key={index}
                        className="m-0 rounded-xl flex-grow"
                        onClick={() =>
                          fullImage.showImage(
                            image.startsWith("http")
                              ? image
                              : "data:image/png;base64," + image
                          )
                        }
                      >
                        <img
                          className="w-full h-full object-cover rounded-md cursor-pointer"
                          src={
                            image.startsWith("http")
                              ? image
                              : "data:image/png;base64," + image
                          }
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
