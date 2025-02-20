import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./components/useContext/AuthContext.tsx";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Must match server
  credentials: "include",
  cache: new InMemoryCache(),
});
import { BrowserRouter } from "react-router";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApolloProvider client={client}>
          <ToastContainer />
          <App />
        </ApolloProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
