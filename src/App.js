import "./App.css";
import { Container } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main

import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

import Work from "./components/work/Work";
import OurProjects from "./components/ourProjects/OurProjects";
import ArticlesAndNews from "./components/articlesAndNews/ArticlesAndNews";

// Pages
import HomePage from "./pages/homePage/HomePage";
import Services from "./pages/services/Services";
import ServicesSingle from "./pages/services/ServicesSingle";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/Blog";
import Pricing from "./pages/pricing/Pricing";
import Faqs from "./pages/faq/Faqs";
import ErrorPage from "./pages/404/ErrorPage";
import Pages from "./pages/pages/Pages";
import Contact from "./pages/contact/Contact";
import RestrictedPage from "./pages/restrictedPage/RestrictedPage";

function App() {
  return (
    <Container fixed>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Project" element={<OurProjects />} />
          <Route path="/News" element={<ArticlesAndNews />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/RestrictedPage" element={<RestrictedPage />} />

          <Route path="/Services" element={<Services />} />
          <Route path="/Servicessingle" element={<ServicesSingle />} />
          <Route path="/Ourprojects" element={<OurProjects />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Errorpage" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </Container>
  );
}

export default App;
