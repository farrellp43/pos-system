import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PageLayout from "../layouts/PageLayout";
import Dashboard from '../pages/Dashboard/Dashboard';
import StokBarang from '../pages/StokBarang/StokBarang';
import Kasir from '../pages/Kasir/Kasir';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <PageLayout>
                        <Dashboard />
                    </PageLayout>
                </Route>
                <Route path="/stok">
                    <PageLayout>
                        <StokBarang />
                    </PageLayout>
                </Route>
                <Route path="/kasir">
                    <PageLayout>
                        <Kasir />
                    </PageLayout>
                </Route>
            </Switch>
        </Router >
    );
}