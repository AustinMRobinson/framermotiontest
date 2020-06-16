import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/layout";
import CardPage from "./components/cardpage"
import Card from './components/card'

import { motion } from "framer-motion"

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card-page">
          <CardPage />
        </Route>
        <Route path="/page-2">
          {/* <Page2 /> */}
        </Route>
        <Route path="/page-3">
          {/* <Page3 /> */}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <Layout>
      <motion.div variants={stagger} className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 py-20">
        <Card to="/card-page" />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </Layout>
  )
}

export default App;
