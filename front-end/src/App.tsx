import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Screen/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Search from './Screen/Search';
function App() {
  const queryClient = new QueryClient()
  axios.defaults.baseURL = 'https://backend-omnify.joysam.me';

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

        <Router >
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/"  element={<Home />} />
          <Route path="/search/:query"  element={<Search />} />
          
        </Routes>
        <Footer />
        </Router>
      </QueryClientProvider>

    </div>
  );
}

export default App;
