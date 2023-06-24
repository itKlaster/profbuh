import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const ArticleItem = () => {

  const  article = [
  { id: 1, 
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80", 
    title: "  Like so many organizations these days, Autodesk is a company intransition. It was until recently a traditional boxed software companyselling licenses. Yet its own business model disruption is only partof the story",   
  },
  { id: 2, 
    img: "https://images.unsplash.com/photo-1648114773131-321c91371212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1466&q=80", 
    title: " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",   
  },
  { id: 3, 
    img: "https://images.unsplash.com/photo-1686848033365-7521510f91a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", 
    title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",   
  }
  ]

  const newArr = article.map((item) => {
    return (
      <Card className="flex-row w-full max-w-[48rem] mt-10 mb-5" key={item.id}>
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img
            src={item.img}
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography color="gray" className="font-normal mb-8">
            {item.title}
          </Typography>
          <a href="#" className="flex justify-end mr-5 ">
            <Button variant="text" className="flex items-center gap-2 text-purple-800 rounded-full border border-purple-600 hover:bg-purple-100">
              Подробнее
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  })
  return (
    <div>{newArr}</div>
  )
};
