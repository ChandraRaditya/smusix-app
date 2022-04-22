import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AppRouter from "./route";

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
