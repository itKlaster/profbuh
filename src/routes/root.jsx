import { Button, Input } from "@material-tailwind/react";
import { ArticleItem } from "../components/article-item";

export const Root = () => {
  return (
    <div className="flex justify-center">
      <div className="w-container flex justify-center items-center mt-10 flex-col">
        <div className="w-3/4 flex gap-2">
          <Input className="w-full" label="Поиск" />
          <Button>Искать</Button>
        </div>
        <ArticleItem  />
      </div>
    </div>
  );
};
