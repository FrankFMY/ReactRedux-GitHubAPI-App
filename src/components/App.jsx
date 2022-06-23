import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Main from "./main/Main";
import Card from "./card/card";
import Error from "./main/Error";

const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/card/:username/:reponame" element={<Card/>}/>
                    <Route path="/error" element={<Error/>}/>
                    <Route element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;