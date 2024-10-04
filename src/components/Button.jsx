export const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      className="mx-2 px-2 py-1 rounded-2 bg-transparent w-auto align-content-center align-content-md-start mb-2"
      onClick={onClickHandler}
      value={value}
    >
      {title}
    </button>
  );
};
