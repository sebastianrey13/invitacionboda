import Home from "./componentes/Home.jsx";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const nombre = searchParams.get("nombre") || "";

  return <Home nombre={nombre} />;
}

export default App;