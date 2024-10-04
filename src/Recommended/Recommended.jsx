import { Button } from "./../components/Button";
import "./Recommend.css";

export const Recommended = ({ handleClick }) => {
  return (
    <section className="mb-3 container-fluid m-0 p-0 ms-md-5 ps-md-5">
      <h4 className="fw-bold mx-2 text-center text-md-start">Recommended</h4>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
        <Button onClickHandler={handleClick} value="" title="All products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </section>
  );
};
