import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./i18n/i18n";

import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
