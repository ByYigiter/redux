import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./modules/store";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <Provider store={store}>
    <App />
    </Provider> */}

		<App2 />
	</React.StrictMode>
);
