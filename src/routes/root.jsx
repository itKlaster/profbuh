import { Button, Input } from "@material-tailwind/react";
import { ArticleItem } from "../components/article-item";

export const Root = () => {
  return (
    <div className="flex justify-center text-white bg-bgColor-100 min-h-screen">
      <div className="w-container flex items-center mt-10 flex-col px-2">
        {/* <div className="w-3/4 flex gap-2"> */}
        {/* <Input className="w-full" label="Поиск" /> */}
        {/* <Button className=" bg-purple-800">Искать</Button>
        </div> */}
        <ArticleItem />
      </div>
    </div>
  );
};
