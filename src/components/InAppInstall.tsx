import { useEffect, useState } from "react";

let listener: any = null;
let deferredPrompt: any;

export default function InAppInstall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window) {
      console.log("WINDOW: ", window);
      // Initialize deferredPrompt for use later to show browser install prompt.

      listener = window.addEventListener("beforeinstallprompt", (e) => {
        console.log("EVENT IS LISTEN: ", e);
        // Stash the event so it can be triggered later.
        setVisible(true);
        deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        // showInstallPromotion();
        // Optionally, send analytics event that PWA install promo was shown.
        console.log(`'beforeinstallprompt' event was fired.`);
      });
    }

    return () => {
      // window.removeEventListener("beforeinstallprompt", listener);
      // deferredPrompt = null;
      // listener = null;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 self-center bg-blue-500 rounded-t-lg flex flex-row justify-between items-center px-4 py-2">
      <p className="text-white font-bold flex-1 text-left">
        🥹 Access my articles offiline using our web app 🥹
      </p>

      <button
        onClick={() => {
          console.log("D: ", deferredPrompt);
        }}
        className="bg-white text-sm font-bold text-blue-500 px-4 py-1 rounded-full"
      >
        Install
      </button>
    </div>
  );
}
