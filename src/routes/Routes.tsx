import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Laporan from "../pages/Laporan/Laporan";
import StokBarang from '../pages/StokBarang/StokBarang';
import Transaksi from '../pages/Transaksi/Transaksi';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/laporan">
                    <PageLayout>
                        <Laporan />
                    </PageLayout>
                </Route>
                <Route path="/stok">
                    <PageLayout>
                        <StokBarang />
                    </PageLayout>
                </Route>
                <Route path="/" exact>
                    <PageLayout>
                        <Transaksi />
                    </PageLayout>
                </Route>
            </Switch>
        </Router >
    );
}