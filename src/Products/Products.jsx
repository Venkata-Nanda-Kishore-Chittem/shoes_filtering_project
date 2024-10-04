import "./Products.css";

export const Products = ({ result }) => {
  return (
    <section className="container-fluid d-flex flex-column flex-sm-row flex-wrap justify-content-center justify-content-md-start align-items-center m-0 p-0 ms-md-5 ps-md-5">
      {result}
    </section>
  );
};
