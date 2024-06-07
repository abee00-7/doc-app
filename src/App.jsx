import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import TextEditor from './Components/TextEditor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<TextEditor />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
