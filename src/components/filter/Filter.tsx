import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../redux/actions/actions";
import { stateType } from "../../redux/store";
import FilterItem from "./FilterItem";

const Filter = () => {
  const dispatch = useDispatch();
  const filter: Array<number> = [1, 2, 3, 4, 5];
  const currentFilter = useSelector(
    (state: stateType) => state.images.currentFilter
  );
  const handleClearFilter = () => {
    dispatch(getImages());
  };
  return (
    <div className="filter">
      {filter.map((item: number) => {
        return (
          <FilterItem key={item} item={item} currentFilter={currentFilter} />
        );
      })}
      <button onClick={handleClearFilter}>Очистить фильтр</button>
    </div>
  );
};

export default Filter;
