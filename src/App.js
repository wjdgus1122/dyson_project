import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Community } from "./components/pages/community/Community";
import { Home } from "./components/pages/home/Home";
import { Detail } from "./components/pages/product/detail/Detail";
import { Product } from "./components/pages/product/Product";
import { Service } from "./components/pages/service/Service";
import { Globalstyle } from "./styles/Globalstyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Globalstyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/detail" element={<Detail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
