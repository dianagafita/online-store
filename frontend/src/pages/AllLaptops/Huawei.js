import Title from "../../components/Title/Title";
import ProductPage from "../ProductPage/ProductPage";

export default function Huawei() {
  const tags = ["laptop", "Huawei"]; // Example array of tags

  return (
    <>
      <Title title="Huawei" />
      <ProductPage tags={tags} />;
    </>
  );
}
