import "./Colors.css";
import { Input } from "./../../components/Input";

export const Colors = ({ handleChange }) => {
  return (
    <div className="mb-3">
      <p className="mb-1 sidebar-title text-uppercase">Colors</p>
      <div className="">
        <input
          className="form-check-input"
          type="radio"
          name="colors"
          value=""
          onChange={handleChange}
          id="all-colors"
          defaultChecked
        />
        &nbsp;&nbsp;
        <label className="radio-label form-check-label" htmlFor="all-colors">
          All
        </label>
      </div>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="colors"
        id="black"
      />

      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="colors"
        id="blue"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="colors"
        id="red"
      />

      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="colors"
        id="green"
      />

      <div className="">
        <input
          className="form-check-input"
          type="radio"
          name="colors"
          value="white"
          title="White"
          onChange={handleChange}
          id="white-color"
        />
        &nbsp;&nbsp;
        <label className="radio-label form-check-label" htmlFor="white-color">
          White
        </label>
      </div>
    </div>
  );
};
