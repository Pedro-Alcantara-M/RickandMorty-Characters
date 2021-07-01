import { Provider } from "react-redux";
import store from './store'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <MainContent/>
          <Footer/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
