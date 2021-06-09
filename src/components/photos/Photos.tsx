import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/actions/actions";
import { stateType } from "../../redux/store";

const Photos = () => {
  const dispatch = useDispatch();
  const displayPhotos = useSelector(
    (state: stateType) => state.images.displayImages
  );

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <div>
      {displayPhotos.map((image) => {
        return (
          <img key={image.id} src={image.thumbnailUrl} alt={image.title}></img>
        );
      })}
    </div>
  );
};

export default Photos;
