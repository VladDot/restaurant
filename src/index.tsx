import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
