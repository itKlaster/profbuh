import { useContext } from "react";
import { ExpandedImageContext } from "../context";

export const ExpandedImage = () => {
  const { image, title, hideImage } = useContext(ExpandedImageContext);

  return (
    <div
      className="w-full h-screen fixed left-0 top-0 backdrop-blur-md flex justify-center items-center z-20 cursor-pointer flex-col text-textColor"
      onClick={hideImage}
    >
      <img src={image} className="max-h-4/5 max-w-4/5" />
      <h5 className="mt-4">{title}</h5>
    </div>
  );
};
