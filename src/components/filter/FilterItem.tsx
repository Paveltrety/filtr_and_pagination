import React from "react";
import { useDispatch } from "react-redux";
import { getImagesFilter } from "../../redux/actions/actions";
type Props = {
  item: number;
  currentFilter: number | null;
};

const FilterItem: React.FC<Props> = ({ item, currentFilter }) => {
  const dispatch = useDispatch();
  const handleSelectFilter = () => {
    dispatch(getImagesFilter(item));
  };
  return (
    <div
      onClick={handleSelectFilter}
      className={
        item === currentFilter ? "filter__item-active" : "filter__item"
      }
    >
      {item}
    </div>
  );
};

export default FilterItem;
