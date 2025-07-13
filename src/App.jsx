import "./App.css";
import {AppRouter} from "./router/AppRouter";
import { getCurrentUser } from "./services/api";

function App() {
  return <AppRouter />
}

export default App;
