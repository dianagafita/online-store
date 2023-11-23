import Title from "../../components/Title/Title";
import ProductPage from "../ProductPage/ProductPage";

export default function Mac() {
  const tags = ["phone", "Apple"]; // Example array of tags

  return (
    <>
      <Title title="Apple" />
      <ProductPage tags={tags} />
    </>
  );
}
