// singele comment
/* 
JS multiple comment
*/

// REACT
import React from "react";
import ReactDOM from "react-dom/client";

// EXTERNAL CSS (proje kendi stillerin)
import "./index.css";

// I18N INTERNATIONALIZATION
import "./internationalization/i18nlanguage";

// UTILS
import reportWebVitals from "./reportWebVitals";

// ROUTER
import { BrowserRouter } from "react-router-dom";

// REUSABILITY TOAST
import ResuabilityToast from "./reusability/ReusabilityToast";

// COMPONENTS
import RouterApp from "./routes/RouterApp";

/* -----------------------------------------------------
   NODE_MODULES'TAN GELEN TÜM KÜTÜPHANELER
   (CDN / index.html değil, buradan import ediyoruz)
----------------------------------------------------- */

// BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";

// FONT AWESOME
import "@fortawesome/fontawesome-free/css/all.min.css";

// ANIMATE.CSS
import "animate.css/animate.min.css";

// jQuery
import $ from "jquery";

// jQuery UI (jquery-ui-dist paketinden)
import "jquery-ui-dist/jquery-ui.min.js";
import "jquery-ui-dist/jquery-ui.min.css";

// Bootstrap JS (bundle -> Popper içinde)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// SweetAlert2
import Swal from "sweetalert2";

// WOW.js
import { WOW } from "wowjs";

// counterUp2
import counterUp from "counterup2";

/* -----------------------------------------------------
   GLOBAL PENCEREYE GEREKEN NESNELERİ AT
   (Eski script tarzı kodlar hala çalışsın diye)
----------------------------------------------------- */

if (typeof window !== "undefined") {
    // jQuery global
    window.$ = window.jQuery = $;

    // SweetAlert2 global
    window.Swal = Swal;

    // counterUp2 global
    window.counterUp = counterUp;

    // WOW.js init
    const wow = new WOW({
        boxClass: "wow",
        animateClass: "animate__animated", // Animate.css v4 ile uyumlu
        offset: 0,
        mobile: true,
        live: true,
    });
    wow.init();
}

/* -----------------------------------------------------
   ROOT RENDER
----------------------------------------------------- */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ResuabilityToast />
            <RouterApp />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
