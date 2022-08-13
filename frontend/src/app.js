import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import TopBar from "./components/topBar";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component{
    render() {
        return(
            <Router>
                <div className="App">
                <TopBar />
                <div id='page-body'>
                    <Routes>
                        <Route path="/index" element={<HomePage />} />
                        {/* <Route path="*" element={<NotFoundPage />} /> */}
                    </Routes>
                </div>
                </div>
            </Router>
        )
    };
}

export default App;