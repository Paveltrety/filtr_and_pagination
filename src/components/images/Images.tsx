import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/actions/actions";
import { stateType } from "../../redux/store";
import ImagesItem from "./ImagesItem";

const Images = () => {
  const dispatch = useDispatch();
  const displayImages = useSelector(
    (state: stateType) => state.images.displayImages
  );

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div className="photo">
      {displayImages.map((image) => {
        return (
          <ImagesItem
            key={image.id}
            src={image.thumbnailUrl}
            title={image.title}
          />
        );
      })}
    </div>
  );
};

export default Images;
