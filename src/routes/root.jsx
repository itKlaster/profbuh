import { Button, Input } from "@material-tailwind/react";
import { ArticleItem } from "../components/article-item";

export const Root = () => {
  return (
    <>
      <header class="container mx-auto py-10 flex justify-between">
        <div class="logo text-3xl font-black ml-5 md:text-4xl">БухЭксперт8</div>
        <nav>
          <ul class="flex gap-x-3">
            <li>
              <button class="btn btn-primary px-10 py-2 rounded-lg text-white w-3/4">
                Главная
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="min-h-screen container mx-auto ">
        <div className="w-full flex items-center mt-10 flex-col px-2">
          {/* <div className="w-3/4 flex gap-2"> */}
          {/* <Input className="w-full" label="Поиск" /> */}
          {/* <Button className=" bg-purple-800">Искать</Button>
        </div> */}
          <ArticleItem />
        </div>
      </div>
    </>
  );
};
