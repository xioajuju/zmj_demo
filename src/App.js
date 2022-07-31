import React, { Component } from "react";
import { Link, Route,Redirect } from 'react-router-dom'

import Hea from "./components/Hea";
import Sea from "./components/Sea";
import ShowPage from "./components/ShowPage";
import List from "./components/List";
import FooterPages from "./components/FooterPages";

import "./App.css";

export default class App extends Component {
  state = {
    ShowListPage: false,
  };
  handleShowListPage = (flagbool) => {
    this.setState({ ShowListPage: flagbool });
  };
  render() {
    console.log("this.state.ShowListPage:",this.state.ShowListPage);
    return (
      <div>
        <div className="Hea">
          <Hea />
        </div>
        <div className="Sea">
          <Sea
            handleShowListPage={this.handleShowListPage}
            ShowListPage={this.state.ShowListPage}
          />
        </div>
        <div className="Route_box">

               {/* <Route path="/*" element={<ShowPage />} />  */}
                <Route path="/about" component={ShowPage } />
                <Route path="/home" component={List }  />
                <Redirect  to='/about'/>
        </div>
      </div>
    );
  }
}
