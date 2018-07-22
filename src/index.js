import { DashboardStore, DashboardContainer } from "multiple-mobx-instance-module";
import React from "react";
import { render } from "react-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";


configure({
    enforceActions: true
});

const stores = {
    dashboardStore: new DashboardStore()
}

render(
    <Provider {...stores}>
        <div>
            <DashboardContainer />
        </div>
    </Provider>
    , document.querySelector("#app")
);