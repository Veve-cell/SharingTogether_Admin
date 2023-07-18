import { useRoutes } from "react-router-dom";
import routes from "./routes";
import MasterLayout from "./pages/theme/masterLayout";

function App() {
  // const routing = useRoutes(routes)
  return (
    <div className="App">
      <MasterLayout>
      {useRoutes(routes)}
      </MasterLayout>
    </div>
  );
}

export default App;
