import { Card } from "components/Card/card";
import { Product } from "components/Product/product";
import { Search } from "components/Search/search";

export function Catalog() {
  return (
    <main className="m-2 m-md-4">
      <Card children={<Search />} color={"bg-light"} hasShadow={false} />
      <Card children={<Product />} color={"bg-light"} hasShadow={false} />
      <Card children={<Product />} color={"bg-light"} hasShadow={false} />
    </main>
  );
}