import Title from "../../components/Title/Title";
import ProductPage from "../ProductPage/ProductPage";

export default function Mac() {
  const tags = ["laptop", "Apple"]; // Example array of tags

  return (
    <>
      <Title title="Mac" />
      <ProductPage tags={tags} />
    </>
  );
}
