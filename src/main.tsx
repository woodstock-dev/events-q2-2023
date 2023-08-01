import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "./main.css";

import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "./theme.tsx";

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
