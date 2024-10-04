import "./Category.css";
import { Input } from "./../../components/Input";

export const Category = ({ handleChange }) => {
  return (
    <div className="mb-3">
      <p className="mb-1 sidebar-title text-uppercase">Category</p>
      <div className="">
        <input
          className="form-check-input"
          type="radio"
          name="category"
          value=""
          onChange={handleChange}
          id="all-category"
          defaultChecked
        />
        &nbsp;&nbsp;
        <label className="radio-label form-check-label" htmlFor="all-category">
          All
        </label>
      </div>

      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="category"
        id="sneakers"
      />

      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="category"
        id="flats"
      />

      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="category"
        id="sandals"
      />

      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="category"
        id="heels"
      />
    </div>
  );
};
