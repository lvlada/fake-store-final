import { Routes, Route } from "react-router";
import { LoginPageContainer } from "../pages/Login";
import { HomePageLayout } from "../layout/HomePageLayout";
import { LoginPageLayout } from "../layout/LoginPageLayout";
import { HomePageContainer } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SingleProductContainer } from "../pages/SingleProduct/SingleProductContainer";
import { SingleProductLayout } from "../layout/SingleProductLayout";
import { ProfilPageContainer } from "../pages/ProfilPage/ProfilPageContainer";
import { PrivateRoute, PublicRoute } from "../components";
import { BaseLayout } from "../layout/BaseLayout";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      {/* Javne rute za nenalogovane */}
      <Route element={<PublicRoute />}>
        <Route element={<LoginPageLayout />}>
          <Route path="/login" element={<LoginPageContainer />} />
        </Route>
        <Route path="/landing" element={<BaseLayout />} />
      </Route>

      {/* Zaštićene rute za ulogovane */}
      <Route element={<PrivateRoute />}>
        <Route element={<HomePageLayout />}>
          <Route path="/" element={<HomePageContainer />} />
        </Route>
        <Route element={<SingleProductLayout />}>
          <Route path="/product/:id" element={<SingleProductContainer />} />
        </Route>
        <Route path="/profile" element={<ProfilPageContainer />} />
      </Route>
    </Routes>
  );
}

export { AppRouter };
