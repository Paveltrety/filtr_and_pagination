type Props = {
  src: string;
  title: string;
};

const ImagesItem: React.FC<Props> = ({ src, title }) => {
  return (
    <div className="photo__item">
      <div className="photo__item__img">
        <img src={src} alt={title}></img>
      </div>
      <div className="photo__item__desc">
        <h4 className="photo__item__desc-title">{title}</h4>
        <h5 className="photo__item__desc-link">{src}</h5>
      </div>
    </div>
  );
};

export default ImagesItem;
