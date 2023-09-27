import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteInvoice, getInvoiceByInvoiceNumber } from "../state";

import Container from "react-bootstrap/Container";
import InvoiceModal from "./InvoiceModal";

class InvoicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      invoice: {},
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = (event) => this.setState({ isOpen: false });

  render() {
    const { invoiceList } = this.props;

    return (
      <Container>
          <h2>Invoice List</h2>

        <Link to="/InvoiceForm">
          <Button
            className="mt-3"
            variant="primary"
            onClick={this.handleCreateInvoice}
          >
            Create Invoice
          </Button>
        </Link>
        <hr></hr>
        {invoiceList.length === 0 ? (
          <div className="d-flex flex-col w-100 h-full align-items-center justify-content-center">
            <h4>No Data</h4>
          </div>
        ) : (
          <Row
            className="d-flex"
          >
            {invoiceList.map((invoice) => (
              <Col key={invoice}  className=" my-3">
                <div class="card-invoice" style={{ width: "18rem" }}>
                  <div class="card-body">
                    <h5 class="card-title">
                      <span className="small">Invoice Number</span> :{" "}
                      {invoice.invoiceNumber}
                    </h5>
                    <h6 class="card-subtitle mb-2">
                      <span className="text-muted">Bill To : </span>
                      <span className="w-bold">{invoice.billTo}</span>
                    </h6>
                    <p class="card-text">
                      Due Date:
                      <span className="w-bold ">{invoice.dateOfIssue}</span>
                    </p>
                    <p class="card-text">
                      Amount:<span className="w-bold">{invoice.total}</span>
                    </p>
                    <Row>
                      <Col md={6}>
                        <Button
                          variant="primary"
                          onClick={() => this.handleViewInvoice(invoice)}
                          className="card-btn m-1 px-1"
                        >
                          View
                        </Button>
                      </Col>

                      <Col md={6}>
                        <Link to="/updateInvoice">
                          <Button
                            variant="primary"
                            onClick={() => this.handleEditInvoice(invoice)}
                            className="card-btn m-1 px-2"
                          >
                            Edit
                          </Button>
                        </Link>
                      </Col>

                      <Col md={12}>
                        <Button
                          variant="danger"
                          onClick={() => this.handleDeleteInvoice(invoice)}
                          className="card-btn btn m-1 px-2"
                        >
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
        <InvoiceModal
          showModal={this.state.isOpen}
          closeModal={this.closeModal}
          info={this.state.invoice}
          items={this.state.invoice.items}
          currency={this.state.invoice.currency}
          subTotal={this.state.invoice.subTotal}
          taxAmount={this.state.invoice.taxAmount}
          discountAmount={this.state.invoice.discountAmount}
          total={this.state.invoice.total}
          from="view"
        />
      </Container>
    );
  }

  handleCreateInvoice = () => {
    console.log("in create Invoice");
  };

  handleViewInvoice = (invoice) => {
    this.setState({ invoice: invoice }, () => {
      console.log(this.state.invoice);
      console.log(this.state.invoice.items);
      this.openModal();
    });
  };

  handleEditInvoice = (invoice) => {
    this.props.getInvoiceByInvoiceNumber(invoice.invoiceNumber);
  };

  handleDeleteInvoice = (invoice) => {
    this.props.deleteInvoice(invoice.invoiceNumber);
  };
}

function mapStateToProps(state) {
  return {
    invoiceList: state.invoiceList,
  };
}

export default connect(mapStateToProps, {
  deleteInvoice,
  getInvoiceByInvoiceNumber,
})(InvoicePage);

// <Container>
// <InvoiceModal
//   showModal={this.state.isOpen}
//   closeModal={this.closeModal}
//   info={this.state.invoice}
//   items={this.state.invoice.items}
//   currency={this.state.invoice.currency}
//   subTotal={this.state.invoice.subTotal}
//   taxAmount={this.state.invoice.taxAmount}
//   discountAmount={this.state.invoice.discountAmount}
//   total={this.state.invoice.total}
//   from="view"
// />
// <div>
//   <h1>Invoices</h1>
// <Link to="/InvoiceForm">
//   <Button variant="primary" onClick={this.handleCreateInvoice}>
//     Create Invoice
//   </Button>
// </Link>
//   <Card className="p-2 mt-2">
//     {invoiceList.length === 0 ? (
//       <div className="d-flex flex-col w-100 h-full align-items-center justify-content-center">
//         <h4>No Data</h4>
//       </div>
//     ) : (
//       <Table className="mt-1" striped bordered hover>
//         <thead>
//           <tr>
//             <th className="p-2">Invoice Number</th>
//             <th className="p-2">To Address</th>
//             <th className="p-2">From Address</th>
//             <th className="p-2">Amount</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoiceList.length > 0 &&
//             invoiceList.map((invoice) => (
//               <tr key={invoice.invoiceNumber}>
//                 <td className="px-2">{invoice.invoiceNumber}</td>
//                 <td className="px-2">{invoice.billToEmail}</td>
//                 <td className="px-2">{invoice.billFromEmail}</td>
//                 <td className="px-2">{invoice.total}</td>
//                 <td className="px-2">
//                   <Button
//                     variant="primary"
//                     onClick={() => this.handleViewInvoice(invoice)}
//                     className="mx-1 px-1"
//                   >
//                     View
//                   </Button>
//                   <Link to='/updateInvoice'>
//                     <Button
//                       variant="primary"
//                       onClick={() => this.handleEditInvoice(invoice)}
//                       className="mx-1 px-2"
//                     >
//                       Edit
//                     </Button>
//                   </Link>
//                   <Button
//                     variant="danger"
//                     onClick={() => this.handleDeleteInvoice(invoice)}
//                     className="mx-1 px-2"
//                   >
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>
//     )}
//   </Card>
// </div>
// </Container>
