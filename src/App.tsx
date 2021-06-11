import { useSelector } from "react-redux";
import Filter from "./components/filter/Filter";
import Pagination from "./components/pagination/Pagination";
import Images from "./components/images/Images";
import { stateType } from "./redux/store";

function App() {
  const currentFilter = useSelector(
    (state: stateType) => state.images.currentFilter
  );
  return (
    <div className="wrapper">
      <Filter />
      <h1 className='title'> {currentFilter ? `Images album ${currentFilter}` : "All images"}</h1>
      <Images />
      <Pagination />
    </div>
  );
}

export default App;
