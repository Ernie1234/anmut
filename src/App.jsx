import { Route, Router } from "react-router-dom";

import { About, Contact, Home, Services } from "./routes";
import ErrorPage from "./error-page";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={ErrorPage} />
      </Router>
    </>
  );
}

export default App;
