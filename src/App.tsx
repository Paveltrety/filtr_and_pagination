import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Filter from "./components/filter/Filter";
import Pagination from "./components/pagination/Pagination";
import Photos from "./components/photos/Photos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <div className="wrapper">
      <Filter />
      <Photos />
      <Pagination />
    </div>
  );
}

export default App;
