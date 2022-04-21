import "./App.css";
// import Home from './pages/createplaylist/index';
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./route/route";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
