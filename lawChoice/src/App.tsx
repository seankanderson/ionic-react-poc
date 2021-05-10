import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";


/* ROUTES */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LawyerList from './pages/LawyerList';
import LawyerDetail from './pages/LawyerDetail';
import Faq from './pages/Faq';
import FaqDetail from './pages/FaqDetail';

/* Theme variables */
import "./theme/variables.css";
import './App.css';
import React from "react";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/lawyerlist">
          <LawyerList />
        </Route>
        <Route exact path="/lawyerdetail/:id">
          <LawyerDetail />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/faqdetail/:id">
          <FaqDetail />
        </Route>
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
