import { BsFillBagHeartFill } from "react-icons/bs";

export const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <div className="shoe-card p-2 rounded-2 mx-2 my-2 d-flex flex-column justify-content-evenly align-items-start">
      <img src={img} alt={title} className="mb-4 w-100 h-50 object-fit-scale" />
      <div>
        <p className="mb-1 shoe-title fw-semibold">{title}</p>
        <div className="d-flex">
          {star} {star} {star} {star}
          &nbsp;
          <span className="mb-1">{reviews}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>
            <del>{prevPrice}</del> ${newPrice}
          </span>
          <span>
            <BsFillBagHeartFill className="mb-1" />
          </span>
        </div>
      </div>
    </div>
  );
};
