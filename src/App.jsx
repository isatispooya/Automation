import "./App.css";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import Router from "./routes/sections";
import { BrowserRouter as RouterProvider } from "react-router-dom";

export default function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });



  return (
    <CacheProvider value={cacheRtl}>
      <RouterProvider>
          <Router />
      </RouterProvider>
    </CacheProvider>
  );
}
