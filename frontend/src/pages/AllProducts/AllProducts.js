import Title from "../../components/Title/Title";
import ProductPage from "../ProductPage/ProductPage";

export default function AllProducts() {
  return (
    <>
      <Title title="All Products" margin="1.5rem 0 0 2.5rem" />
      <ProductPage tags={""} />
    </>
  );
}
