import Header from "./page/Header";
import Page from "./page/page";
import { AppBar, CssBaseline } from "@mui/material";

function App() {
  return (
    <AppBar
            position="absolute"
            color="default"
            elevation={0}
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,mt: 2}}
            >
        <CssBaseline />
        <Header/>
        <Page/>
    </AppBar>
  );
}

export default App;
