# Invoice Generator - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

### Live Demo
https://invoice-generator-react.netlify.app/

### Screenshots
<img src="https://i.imgur.com/wRetnxk.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/AZChaei.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/Bz3K3DE.png" style="max-width: 100px; width: 100%; height: auto;">

#Description:
The "Invoice Generator" project is a web application built using React and styled with React Bootstrap. Its primary purpose is to facilitate the creation and management of invoices. The project offers a user-friendly interface for generating invoices and maintaining a list of invoices for easy reference. Key features and components of this project include:

##Invoice Creation:
Users can create invoices by providing essential details such as invoice number, date of issue, billing and shipping information, and line items (products/services) with quantities and prices.
The application ensures a smooth and intuitive invoice creation process.

##Invoice Listing:
All created invoices are listed in a dedicated section of the application, making it easy to access and manage them.
The list provides an overview of essential invoice details, such as invoice number, date of issue, and the total amount.

##Actions on Invoices:
The project enables users to perform three primary actions on each invoice listed:
View: Users can view the details of an existing invoice by clicking the "View" button. This feature allows users to review invoice information and check payment status.
Edit: Invoices can be edited to accommodate changes or updates in billing details or line items. The "Edit" functionality ensures flexibility in managing invoices.
Delete: Users can delete invoices they no longer need. This action helps maintain a clutter-free list of invoices.

##State Management with Redux:
Redux is used for state management in the project, providing a predictable and centralized way to manage application data.
Redux stores important information, including invoice data and application state, making it accessible to various components.

##Styling with React Bootstrap:
React Bootstrap is employed to style the application, resulting in a clean and visually appealing user interface.
Bootstrap's pre-designed components and responsive layout capabilities enhance the overall user experience.
The "Invoice Generator" project simplifies the process of creating, viewing, editing, and managing invoices, making it a valuable tool for businesses and individuals who need a convenient and efficient way to handle invoicing. Its use of React, Redux for state management, and React Bootstrap for styling ensures a modern and user-friendly experience for all users.

### Installation

```
git clone https://github.com/azeemSayyad/invoice-generator/

npm install

npm start / npm run build
```

### To-Do
- [x] Finish parsing data into Preview Modal

- [x] Currency Picker

- [x] Calculate Tax and Discounts

- [ ] Store invoices in Firebase DB


### Meta

John Uberbacher – [johnuberbacher.com](https://johnuberbacher.com)
