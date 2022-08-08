import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubCard from './pages/SubCard';
import Home from './pages/Home';
import CategoryView from './pages/CategoryView';
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';
import { SidebarContext } from './contexts/SidebarContext';
import { Layout } from 'antd';

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  return (
    <ThemeContext.Provider value={{ collapsed, setCollapsed }}>
      <SidebarContext.Provider value={{ toggled, setToggled }}>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Layout>
              <Sidebar />
              <Layout className="glass-mophism">
                <Content className="site-layout">
                  <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/resource/:id" element={<SubCard />} />
                    <Route
                      path="/resource/category/:category_name"
                      element={<CategoryView />}
                    />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </BrowserRouter>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
