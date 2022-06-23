import React from 'react';
import './app.less';
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from './main/Main';

const App = () => {
    const dispatch = useDispatch()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
