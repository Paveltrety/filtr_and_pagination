import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";

type Props = {
  number: number;
  currentPage: number;
};
const PaginationItem: React.FC<Props> = ({ number, currentPage }) => {
  const dispatch = useDispatch();
  const handleSelectPage = () => {
    dispatch(setCurrentPage(number));
  };
  return (
    <span
      style={
        number === currentPage
          ? {
              color: "red",
            }
          : {}
      }
      onClick={handleSelectPage}
    >
      {number}
    </span>
  );
};

export default PaginationItem;
