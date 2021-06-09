import React from "react";
import { useSelector } from "react-redux";
import { stateType } from "../../redux/store";
import { createPages } from "../../utils/createPages";
import PaginationItem from "./PaginationItem";

const Pagination = () => {
  const { totalNumberPages, currentPage } = useSelector((state: stateType) => ({
    totalNumberPages: state.images.totalNumberPages,
    currentPage: state.images.currentPage,
  }));

  const pages: Array<number> = [];
  createPages(pages, totalNumberPages, currentPage);

  return (
    <div>
      {pages.map((numberPage: number) => {
        return (
          <PaginationItem
            key={numberPage}
            number={numberPage}
            currentPage={currentPage}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
