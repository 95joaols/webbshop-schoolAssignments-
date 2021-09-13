import { StylesContext } from "@material-ui/styles";
import { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { Menu } from "./Menu";
import { CustomerInputSkeleton } from "./skeletons/CustomerInputSkeleton";
import { ProductCardListSkeleton } from "./skeletons/ProductCardListSkeleton";
import { ShoppingCartTableSkeleton } from "./skeletons/ShoppingCartTableSkeleton";

const HomePage = lazy(() => import("../page/HomePage"));
const ProductDetail = lazy(() => import("../page/ProductPage"));
const CheckoutPage = lazy(() => import("../page/CheckoutPage"));
const SummaryPage = lazy(() => import("../page/SummaryPage"));
const AdminPage = lazy(() => import("../page/AdminPage"));

export const Layout: FC = () => {
  return (
    <>
      <Menu />
      <ErrorBoundary>
        <Suspense fallback={<p>loading</p>}>
          <Switch>
            <Route path="/summary">
              <SummaryPage />
            </Route>
            <Route path="/shoppingcart" component={CheckoutPage}>
              <Suspense
                fallback={
                  <>
                    <ShoppingCartTableSkeleton />
                    <CustomerInputSkeleton />
                  </>
                }
              >
                <CheckoutPage />
              </Suspense>
            </Route>
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/" component={HomePage}>
              <Suspense fallback={<ProductCardListSkeleton />}>
                <HomePage />
              </Suspense>
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
