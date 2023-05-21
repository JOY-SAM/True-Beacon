import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Screen/SignIn';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import QueryNFT from './Screen/QueryNFT';
function App() {
  const queryClient = new QueryClient()
  axios.defaults.baseURL = 'http://localhost:8000/';

  return (
    // Since there is no symbol in CSV it is not implemented
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router >
          <Header />
          <div className=' min-h-screen min-w-screen bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(/background.jpg)" }}>
            <Routes>
              <Route path="*" element={<QueryNFT />} />
              <Route path="/" element={<QueryNFT />} />
              <Route path="/login" element={<QueryNFT />} />
              <Route path="/sigin" element={<QueryNFT />} />



              
            </Routes>
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
