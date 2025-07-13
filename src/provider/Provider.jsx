import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { BrowserProvider } from "./BrowserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Provider({ children }) {
  const queryClient = new QueryClient();
  return (
    <BrowserProvider>
      <AuthProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserProvider>
  );
}

export { Provider };
