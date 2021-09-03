import { Card } from "components/Card/card";
import { Product } from "components/Product/product";
import { Search } from "components/Search/search";

export function Catalog() {
  return (
    <main className="container-xl">
      <div className="mt-2 mt-sm-4 mt-md-0 p-md-4 d-grid gap-2 gap-sm-4 col-xl-10 mx-xl-auto">
        <header>
          <Card children={<Search />} color={"bg-light"} hasShadow={false} />
        </header>
        <section>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-2 mb-sm-4">
              <Card
                children={<Product />}
                color={"bg-light"}
                hasShadow={false}
              />
            </div>
            <div className="col-sm-6 col-lg-4 mb-2 mb-sm-4">
              <Card
                children={<Product />}
                color={"bg-light"}
                hasShadow={false}
              />
            </div>
            <div className="col-sm-6 col-lg-4 mb-2 mb-sm-4">
              <Card
                children={<Product />}
                color={"bg-light"}
                hasShadow={false}
              />
            </div>
            <div className="col-sm-6 col-lg-4 mb-2 mb-sm-4">
              <Card
                children={<Product />}
                color={"bg-light"}
                hasShadow={false}
              />
            </div>
            <div className="col-sm-6 col-lg-4 mb-2 mb-sm-4">
              <Card
                children={<Product />}
                color={"bg-light"}
                hasShadow={false}
              />
            </div>
            <div className="col-sm-6 col-lg-4 mb-2 mb-sm-4">
              <Card
                children={<Product />}
                color={"bg-light"}
                hasShadow={false}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}