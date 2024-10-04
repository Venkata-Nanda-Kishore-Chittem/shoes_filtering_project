import "./Price.css";
import { Input } from "./../../components/Input";

export const Price = ({ handleChange }) => {
  return (
    <div className="mb-3">
      <p className="mb-1 sidebar-title text-uppercase">Price</p>
      <div className="">
        <input
          className="form-check-input"
          type="radio"
          name="price"
          value=""
          onChange={handleChange}
          id="all-price"
          defaultChecked
        />
        &nbsp;&nbsp;
        <label className="radio-label form-check-label" htmlFor="all-price">
          All
        </label>
      </div>

      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - $50"
        name="price"
        id="50"
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="price"
        id="100"
      />

      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="price"
        id="150"
      />

      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="price"
        id="200"
      />
    </div>
  );
};
