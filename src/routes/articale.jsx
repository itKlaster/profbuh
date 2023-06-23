import { useParams } from "react-router-dom";

export const Article = () => {
  let { id } = useParams();

  return <>article {id}</>;
};
