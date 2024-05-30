import React from "react";
import RoutesApp from "./routes/routes";
import './assets/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from "./Contexts/auth";
import SpotifyProvider from "./Contexts/spotify";
import { ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <SpotifyProvider>
            <RoutesApp/>
          </SpotifyProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
