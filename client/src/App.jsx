import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "Components/Header/Header";
import Home from "Pages/Home/Home";
import About from "Pages/About/About";
import Post from "Pages/Post/Post";

const App = () => {
  console.log("test");
  return (
    <main>
      <Router>
        <Header />
        <section className="hero"></section>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/post" exact component={Post} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
