import { BrowserRouter } from "react-router";

function BrowserProvider({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export { BrowserProvider };
