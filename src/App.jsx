import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import FormContextProvider from "./context/ContextoFormulario";
import "./App.css";

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient} >
      <div className="App">
        <FormContextProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/formularioIngreso" element={<Formulario />} />
          </Routes>
        </FormContextProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
