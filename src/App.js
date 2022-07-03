import "./App.css";
import WebsiteSwitch from "./Components/WebsiteSwitch/WebsiteSwitch";

function App({ classes }) {
  return (
    <div className="App">
      <WebsiteSwitch classes={classes} />
    </div>
  );
}

export default App;
