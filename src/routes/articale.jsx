import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useArticles } from "../hooks/use-articals";

export const Article = () => {
  let { id } = useParams();
  const { article, getArticle } = useArticles();
  useEffect(() => {
    getArticle(id);
  }, []);

  console.log(article);

  return (
    <div className="flex justify-center">
      <div className="w-container px-2 flex justify-center items-start mt-10 flex-col">
        <Typography color="gray" className="mb-8 text-3xl text-left font-bold">
          {/* {article?.data.data.title} */}
          test
        </Typography>
        {article?.data.data.topics.map((topic, index) => (
          <li key={index}>
            <a className="underline" href={"#" + index}>
              {/* {topic.subtitle} */}
            </a>
          </li>
        ))}

        <div className="mt-5 w-full flex flex-col gap-10 mb-20">
          {article?.data.data.topics.map((topic, index) => (
            <div key={index} className="" id={index}>
              <Typography
                color="gray"
                className="font-normal mb-4 text-2xl text-left"
              >
                test
                {/* {topic.subtitle} */}
              </Typography>
              <div className="flex flex-col gap-5 md:flex-row ">
                <div className="w-full shrink-0 m-0 rounded-r-xl md:w-2/5 md:rounded-r-none">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={"data:image/png;base64," + topic.image}
                    alt=""
                  />
                </div>
                <Typography
                  color="gray"
                  className="font-normal mb-8 flex flex-col "
                >
                  {topic.text}
                  <span className="bg-blue-400 self-start rounded p-2 text-white mt-4 cursor-pointer">
                    {/* {topic.start} - {topic.end} */}
                  </span>
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
