import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import HomePage from "./pages/HomePage";
//import TopBar from "./components/topBar";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPage from "./pages/DetailPage";
import UserPage from "./pages/UserPage";
import UserIndex from "./pages/UserPages/UserIndex";

class App extends Component{
    render() {
        return(
            <Router>
                <div className="App">
                <div className="app-top">
                    {/* <TopBar /> */}
                </div>
                <div id='page-body'>
                    <Routes>
                        {/* <Route path="/" to="/category/IOS"element={<HomePage/>} /> */}
                        {/* for category and detail page */}
                        <Route path="/category/:env" element={<HomePage />} />
                        <Route path="/category/:env/:type" element={<HomePage />} />
                        <Route path="/details/:id" element={<DetailPage />} />
                        {/* <Route path="/user/:name" element={<UserPage />} /> */}

                        {/* for userpage */}
                        <Route path="/user/:id/index" element={<UserIndex />} />

                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
                </div>
            </Router>
        )
    };
}

export default App;