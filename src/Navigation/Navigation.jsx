import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import "./Navigation.css";

export const Navigation = ({ query, handleInputChange }) => {
  return (
    <>
      <nav className="d-flex flex-column flex-sm-row justify-content-evenly align-items-center p-2 p-md-3 container-fluid position-sticky top-0 bg-white z-3">
        <BsCart4
          className="fs-2 d-none d-sm-block nav-icons"
          onClick={() => window.location.reload()}
        />
        <div>
          <input
            type="text"
            name="search-input"
            placeholder="Search your shoes here..."
            className="p-2 bg-body-secondary rounded-2"
            autoComplete="off"
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <div className="align-content-center fs-5">
          <AiOutlineHeart className="mx-3 nav-icons" />
          <AiOutlineShoppingCart className="mx-3 nav-icons" />
          <AiOutlineUserAdd className="mx-3 nav-icons" />
        </div>
      </nav>
      <hr className="m-1 w-75 mx-auto mb-3" />
    </>
  );
};
