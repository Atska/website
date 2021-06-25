import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { ProfileBar } from "./components/ProfileBar.js";
import { MainBar } from "./components/MainBar.js";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { BatteryLoading } from "react-loadingg";
import { theme } from "./theme.js";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {loading ? (
            <BatteryLoading speed="0.78" size="large" color="#02a9db" />
          ) : (
            <Grid
              container
              justify="center"
              alignItems="center"
              className="container"
              spacing={4}>
              <Grid item xs={12} sm={7} md={7}>
                <MainBar />
              </Grid>
              <Grid item xs={12} sm={7} md={4}>
                <ProfileBar />
              </Grid>
            </Grid>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
