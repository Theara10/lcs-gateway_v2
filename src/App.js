import "./App.css";
import { Layout, Menu, Breadcrumb, Card, Avatar, Row, Col } from "antd";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubCard from "./pages/SubCard";
import Home from "./pages/Home";
import CategoryView from "./pages/CategoryView";

import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";
import { SidebarContext } from "./contexts/SidebarContext";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    <ThemeContext.Provider value={{ collapsed, setCollapsed }}>
      <SidebarContext.Provider value={{ toggled, setToggled }}>
        <BrowserRouter>
          <Navbar />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <div className="site-layout">
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/resource/:id" element={<SubCard />} />
                <Route
                  path="/resource/category/:category_name"
                  element={<CategoryView />}
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
