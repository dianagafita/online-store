import Title from "../../components/Title/Title";
import ProductPage from "../ProductPage/ProductPage";

export default function SamsungPhone() {
  const tags = ["phone", "Samsung"]; // Example array of tags

  return (
    <>
      <Title title="Samsung" />
      <ProductPage tags={tags} />;
    </>
  );
}
