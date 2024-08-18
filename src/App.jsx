import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./component/layouts/login";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
function App() {

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  
  return (
    <>
    <CacheProvider value={cacheRtl}>
    <div dir="rtl">
    <Login />
    </div>
    
    </CacheProvider>
      
    </>
  );
}

export default App;
