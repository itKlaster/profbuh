import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const ArticleItem = () => {
  return (
    <Card className="flex-row w-full max-w-[48rem] mt-10">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-2/5 shrink-0 m-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="image"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography color="gray" className="font-normal mb-8">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="flex justify-end mr-5 ">
          <Button variant="text" className="flex items-center gap-2 text-purple-800 rounded-full border border-purple-600 hover:bg-purple-100">
            Подробнее
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};
