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
import Search from './Screen/Search';
import QueryNFT from './Screen/QueryNFT';
function App() {
  const queryClient = new QueryClient()
  axios.defaults.baseURL = 'https://backend-omnify.joysam.me';

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router >
          <Header />
          <div className=' min-h-screen min-w-screen bg-center bg-no-repeat bg-cover' style={{ backgroundImage: "url(/background.jpg)" }}>
            <Routes>
              <Route path="*" element={<QueryNFT />} />
              <Route path="/" element={<QueryNFT />} />

              <Route path="/search/" element={<Search />} />


              
            </Routes>
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
