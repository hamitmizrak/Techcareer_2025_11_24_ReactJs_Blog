// rfce  ==> TAB

import React from "react";
import { Toaster } from "react-hot-toast";

/**
 * ReusabilityToast
 *
 * Uygulama genelinde react-hot-toast Toaster sağlayıcısı.
 * Varsayılan:
 *  - position: bottom-right (sağ alt)
 *  - duration: 3000 ms
 *
 * Kullanım:
 *   <ReusabilityToast />
 * veya:
 *   <ReusabilityToast position="top-center" duration={5000} />
 *
 * Not:
 *  - Asıl toast içeriği ve renkleri component içinde
 *    `toast("mesaj", { style: {...} })` ile ayarlanır.
 */
function ReusabilityToast({
                              position = "bottom-right",
                              duration = 3000,
                              ...props
                          }) {
    return (
        <Toaster
            position={position}
            toastOptions={{
                duration,
                // Global default stil (isteğe göre override edilebilir)
                style: {
                    borderRadius: "10px",
                    padding: "10px",
                    background: "#343a40",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                },
                // Tip bazlı default ikonlar (BlogCategoryManagement içinde
                // toast() çağrılarında ikon override edilebiliyor)
                success: {
                    icon: "✅",
                },
                error: {
                    icon: "❌",
                },
                info: {
                    icon: "ℹ️",
                },
                loading: {
                    icon: "⏳",
                },
            }}
            {...props}
        />
    );
}

export default ReusabilityToast;
