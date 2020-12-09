import React, { useState, useEffect } from "react";
import "./style.css";
import Axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'


export default function App() {
  return <div>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/a' component={About}/>
    </Switch>
  </div>;
}
