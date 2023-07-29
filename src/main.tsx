import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { themeOptions } from "./theme.tsx";
import AuthProvider from "./hooks/authHook.tsx";

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
