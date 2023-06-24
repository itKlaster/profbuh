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

  return (
    <div>
      {articles?.map((item) => (
        <Card
          className="flex-col w-4/5 max-w-[48rem] mt-10 mb-10 ml-auto mr-auto md:flex-row md:w-full"
          key={item.id}
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="w-full shrink-0 m-0 rounded-r-xl md:w-2/5 md:rounded-r-none"
          >
            <img
              src={`data:image/png;base64,${item.data.topics[0].images[0]}`}
              alt="image"
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <CardBody className="overflow-hidden">
            <Typography color="gray" className="font-normal mb-8 text-2xl">
              {item.data.title}
            </Typography>

            <Typography
              color="gray"
              className="font-normal mb-8  truncate max-h-40"
            >
              {item.data.description}
            </Typography>

            <Link to={"article/" + item?.id} className="flex justify-end mr-5 ">
              <Button
                variant="text"
                className="flex items-center gap-2 text-purple-800 rounded-full border border-purple-600 hover:bg-purple-100"
              >
                Подробнее
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
