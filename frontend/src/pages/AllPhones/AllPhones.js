import Title from "../../components/Title/Title";
import ProductPage from "../ProductPage/ProductPage";

export default function AllPhones() {
  return (
    <>
      <Title title="All Phones" />
      <ProductPage tags={"phone"} />
    </>
  );
}
