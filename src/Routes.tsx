import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Catalog } from "./pages/Catalog/catalog";
import { Navbar } from "./components/Navbar/navbar";

export const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
    </Switch>
  </BrowserRouter>
)
