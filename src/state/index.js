import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoiceList: [],
  invoice:null
};

const invoiceSlice = createSlice({
    name:"invoiceSlice",
    initialState:initialState,
    reducers:{
        addInvoice:(state,action)=>{
            state.invoiceList.push(action.payload);
        },
        editInvoice:(state,action)=>{
            const {invoiceNumber, editInvoice} = action.payload;
            const index = state.invoiceList.findIndex(
                (invoice) => invoice.invoiceNumber === invoiceNumber
              );
            if(index !== -1){
                state.invoiceList[index] = editInvoice;
            }
        },
        deleteInvoice:(state,action)=>{
            const invoiceNumberToDelete = action.payload;
            console.log(invoiceNumberToDelete)
            state.invoiceList = state.invoiceList.filter(
                (invoice) => invoice.invoiceNumber !== invoiceNumberToDelete
              );
        },
        getInvoiceByInvoiceNumber:(state,action)=>{
            for(let invoice of state.invoiceList){
                if(invoice.invoiceNumber === action.payload){
                    state.invoice = invoice;
                }
            }
        }
    }
})

export const {addInvoice,editInvoice,deleteInvoice,getInvoiceByInvoiceNumber} = invoiceSlice.actions;
export default invoiceSlice.reducer;