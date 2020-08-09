import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import LayoutLoggedIn from "./layouts/LayoutLoggedIn";

// Views
import Home from "./views/Home";
import signIn from "./components/sections/SignIn";
import load from "./components/sections/Load";
import Add from "./components/sections/Add";
import LayoutFooter from "./layouts/LayoutFooter";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute path="/signin" component={signIn} layout={LayoutDefault} />
          <AppRoute path="/load" component={load} layout={LayoutLoggedIn} />
          <AppRoute path="/add" component={Add} layout={LayoutFooter} />
        </Switch>
      )}
    />
  );
};

export default App;
