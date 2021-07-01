import { BrowserRouter, Route } from "react-router-dom";
import Charttwo from "./Chart";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Route path="/chart" component={Charttwo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
