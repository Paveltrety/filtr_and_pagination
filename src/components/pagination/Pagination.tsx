import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/actions/actions";
import { stateType } from "../../redux/store";
import { createPages } from "../../utils/createPages";
import PaginationItem from "./PaginationItem";

const Pagination = () => {
  const { totalNumberPages, currentPage } = useSelector((state: stateType) => ({
    totalNumberPages: state.images.totalNumberPages,
    currentPage: state.images.currentPage,
  }));

  const dispatch = useDispatch();
  const pages: Array<number> = [];

  const handleSelectPage = (numberPage: number) => {
    dispatch(setCurrentPage(numberPage));
  };

  createPages(pages, totalNumberPages, currentPage);

  return (
    <div className="pagination">
      <button
        className="pagination__item-text"
        onClick={() => handleSelectPage(1)}
      >
        start
      </button>
      {pages.map((numberPage: number) => {
        return (
          <PaginationItem
            key={numberPage}
            number={numberPage}
            currentPage={currentPage}
            handleSelectPage={handleSelectPage}
          />
        );
      })}
      <button
        className="pagination__item-text"
        onClick={() => handleSelectPage(totalNumberPages)}
      >
        finish
      </button>
    </div>
  );
};

export default Pagination;
