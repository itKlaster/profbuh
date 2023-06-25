import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ArticleHtml = () => {
  let { id } = useParams();
  const [time, setTime] = useState(true);

  function handleClickTime() {
    setTime((prev) => !prev);
  }

  function handlePrint() {
    window.print();
  }

  useEffect(() => {
    function getHtml() {
      if (time) {
        //eslint-disable-next-line
        $("#place").load(
          "http://192.168.1.210:1337/api/articles/37/html?time=true"
        );
      } else {
        console.log("change");
        //eslint-disable-next-line
        $("#place").load("http://192.168.1.210:1337/api/articles/37/html");
      }
    }
    getHtml();
    console.log(time);
  }, [time]);

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex justify-end w-full gap-5 print:hidden px-0">
          <Button onClick={handlePrint}>распечатать</Button>
          <Button onClick={handleClickTime} className="flex items-center gap-2">
            время
          </Button>

          <Link to={"/article/" + id + "/json"}>
            <Button className="flex items-center gap-2">json</Button>
          </Link>
        </div>
      </div>

      <div
        className="container mx-auto html-ignore print:mt-10 mt-10 px-2"
        id="place"
      >
        HTML HERE
      </div>
    </>
  );
};
