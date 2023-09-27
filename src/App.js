import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import DisplayInvoice from "./components/DisplayInvoice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateInvoice from "./components/UpdateInvoice";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/InvoiceForm" element={<InvoiceForm />} />
            <Route path="/updateInvoice" element={<UpdateInvoice />} />
            <Route path="/" element={<DisplayInvoice />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
