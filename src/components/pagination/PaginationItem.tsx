type Props = {
  number: number;
  currentPage: number;
  handleSelectPage: (numberPage: number) => void;
};
const PaginationItem: React.FC<Props> = ({
  number,
  currentPage,
  handleSelectPage,
}) => {
  return (
    <button
      className={
        number === currentPage
          ? "pagination__item pagination__active"
          : "pagination__item"
      }
      onClick={() => handleSelectPage(number)}
    >
      {number}
    </button>
  );
};

export default PaginationItem;
