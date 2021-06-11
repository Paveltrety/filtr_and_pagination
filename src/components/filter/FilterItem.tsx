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
    <button
      onClick={handleSelectFilter}
      className={
        item === currentFilter ? "filter__item filter__active" : "filter__item"
      }
    >
    Album {item}
    </button>
  );
};

export default FilterItem;
