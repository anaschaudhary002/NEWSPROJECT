import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {Header} from './Header';
import Home from './Components/Home';


export default function App(){
    const [lang, setLang] = useState("en");
    const [search, setSearch] = useState(""); 
    const changeLanguage =(x)=>{
        setLang(x)
    }
    const changeSearch =(x)=>{
        setSearch(x)
    }
    return (
        <>
            <BrowserRouter>
                <Header changeLanguage={changeLanguage} changeSearch={changeSearch}/>
                <Routes>
                    <Route path="/" element={<Home search={search} lang={lang} q="All"/>} />
                    <Route path="/All" element={<Home search={search} lang={lang} q="All"/>} />
                    <Route path="/Politics" element={<Home search={search} lang={lang} q="Politics"/>} />
                    <Route path="/Education" element={<Home search={search} lang={lang} q="Education"/>} />
                    <Route path="/Crime" element={<Home search={search} lang={lang} q="Crime"/>} />
                    <Route path="/Science" element={<Home search={search} lang={lang} q="Science"/>} />
                    <Route path="/Technology" element={<Home search={search} lang={lang} q="Technology"/>} />
                    <Route path="/Covid-19" element={<Home search={search} lang={lang} q="Covid-19"/>} />
                    <Route path="/Sports" element={<Home search={search} lang={lang} q="Sports"/>} />
                    <Route path="/Cricket" element={<Home search={search} lang={lang} q="Cricket"/>} />
                    <Route path="/Jokes" element={<Home search={search} lang={lang} q="Jokes"/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}