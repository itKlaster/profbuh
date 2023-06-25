import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useArticles } from "../hooks/use-articals";

export const ArticleItem = () => {
  const { articles } = useArticles();

  console.log(articles);
  return (
    <div className="w-full">
      <div className="flex justify-between items-end">
        <h1 className="text-5xl font-bold text-white">Список постов</h1>
        <h1 className="text-2xl font-bold text-gray-400">{articles.length} всего</h1>
      </div>
      {articles?.map((item) => (
        <Card
          className="flex-col w-full my-10 ml-auto mr-auto md:flex-row rounded-lg overflow-hidden bg-bgColor-200 text-textColor-200"
          key={item.id}
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="w-full shrink-0 m-0 rounded-r-xl md:w-2/5 md:rounded-r-none"
          >
            <img
              src={item.data.topics[0].images[0].startsWith('http') ? item.data.topics[0].images[0] : `data:image/png;base64,${item.data.topics[0].images[0]}`}
              alt="image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="overflow-hidden bg-bgColor-200">
            <Typography
              color="gray"
              className="font-normal mb-8 text-2xl text-textColor-100"
            >
              {item.data.title}
            </Typography>

            <Typography className="font-normal mb-8 max-h-40">
              {item.data.description.length > 200
                ? item.data.description.slice(0, 200) + "..."
                : item.data.description}
            </Typography>

            <Link to={"article/" + item?.id} className="flex justify-end mr-5 ">
              <Button className="flex items-center gap-3">Подробнее</Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
