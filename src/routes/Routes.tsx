import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Laporan from "../pages/Laporan/Laporan";
import Login from "../pages/Login/Login";
import StokBarang from "../pages/StokBarang/StokBarang";
import Transaksi from "../pages/Transaksi/Transaksi";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <PageLayout>
            <Transaksi />
          </PageLayout>
        </Route>
        <Route path="/stok">
          <PageLayout>
            <StokBarang />
          </PageLayout>
        </Route>
        <Route path="/laporan">
          <PageLayout>
            <Laporan />
          </PageLayout>
        </Route>
        <Route path="/login">
          <PageLayout>
            <Login />
          </PageLayout>
        </Route>
      </Switch>
    </Router>
  );
}
