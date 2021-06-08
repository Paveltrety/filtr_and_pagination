import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getPhotos } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return <div className="App"></div>;
}

export default App;
