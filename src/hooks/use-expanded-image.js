import { useState } from "react";

export const useExpandedImage = () => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");

  function showImage(image, title = "") {
    setImage(image);
    setTitle(title);
  }

  function hideImage() {
    setImage(null);
    setTitle(null);
  }

  return { title, image, hideImage, showImage };
};
