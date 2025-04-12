import React, { useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Mycontext } from "./utils/Myprovider";
import { useContext } from "react";

const initialValues = {
  vendor: "",
  poNumber: "",
  invoiceNumber: "",
  invoiceDate: "",
  totalAmount: "",
  paymentTerms: "",
  invoiceDueDate: "",
  glPostDate: "",
  invoiceDescription: "",
  lineAmount: "",
  department: "",
  account: "",
  location: "",
  description: ""
};

const validationSchema = Yup.object({
  vendor: Yup.string().required("Required"),
  poNumber:Yup.number().required("Required"),
  invoiceNumber: Yup.string().required("Required"),
  invoiceDate: Yup.date().required("Required"),
  totalAmount: Yup.number().required("Required"),
  paymentTerms:Yup.number().required("Required"),
  invoiceDueDate:Yup.date().required("Required"),
  glPostDate:Yup.date().required("Required"),
  invoiceDescription: Yup.string().required("Required"),
  lineAmount: Yup.number().required("Required"),
  department: Yup.string().required("Required"),
  account: Yup.string().required("Required"),
  location: Yup.string().required("Required")
});

const InvoiceForm = () => {

  const {dummy,setDummy}=useContext(Mycontext)
 

  const dummyObj={
    vendor: "",
    poNumber: "123",
    invoiceNumber: "2502",
    invoiceDate: "2024-09-08",
    totalAmount: "30005",
    paymentTerms: "60",
    invoiceDueDate: "2024-11-07",
    glPostDate: "2024-09-10",
    invoiceDescription: "Accounts bill",
    lineAmount: "200",
    department: "Accounts",
    account: "12345678",
    location: "Delhi",
    description: "New"
  }

  const formik = useFormik({
    initialValues: JSON.parse(localStorage.getItem("invoiceForm")) || initialValues,
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("invoiceForm", JSON.stringify(values));
      alert("Form submitted and saved to localStorage");
    }
  });

  useEffect(() => {
    localStorage.setItem("invoiceForm", JSON.stringify(formik.values));
  }, [formik.values]);

  return (
    <div>
      <div className="p-4 bg-blue-50">
      <h1 className="flex gap-1 font-bold text-2xl"><HiMiniUserGroup /> Vendor Details</h1>
      <br />
      <h2 className=" font-bold">Vendor information</h2>
      <p>Vendor</p>
      <select name="vendor" id="" required className=" w-full outline-1" > 
      <option value="vendor-1" >Vendor-1</option>
      {dummy? <option value="vendor-2" selected>Vendor-2</option>:<option value="vendor-2" >Vendor-2</option>}
      <option value="vendor-3">Vendor-3</option>
      <option value="vendor-4">Vendor-4</option>
      </select>
    <h1 className="font-bold">Invoice Details</h1>
    <br />
    <h2 className="font-bold">General Information</h2>

    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 justify-center text-sm" >

      <section>
    
      <div>
        <label>Po Number</label>
        <br />
        <input type="number" name="poNumber" onChange={formik.handleChange} value={ dummy ?  dummyObj.poNumber:formik.values.poNumber} className="w-full outline-1" />
        {formik.errors.poNumber ? <div>{formik.errors.poNumber}</div> : null}
      </div>

      <h2 className="font-bold">Invoice Details</h2>
      <article className="flex gap-2 ">
      <div className="w-[100%]">
        <label>Invoice Number</label>
        <br />
        <input name="invoiceNumber" onChange={formik.handleChange} value={dummy ? dummyObj.invoiceNumber:formik.values.invoiceNumber} className="w-[100%] outline-1"/>
        {formik.errors.invoiceNumber ? <div>{formik.errors.invoiceNumber}</div> : null}
      </div>
      <div className="w-[100%]">
        <label>Invoice Date</label>
        <br />
        <input type="date" name="invoiceDate" onChange={formik.handleChange} value={dummy ? dummyObj.invoiceDate:formik.values.invoiceDate} className="w-[100%] outline-1"/>
        {formik.errors.invoiceDate ? <div>{formik.errors.invoiceDate}</div> : null}
      </div>
      </article>

      <article className="flex gap-2">
      <div className="w-[100%]">
        <label>Total Amount</label>
        <br />
        <input type="number" name="totalAmount" onChange={formik.handleChange} value={dummy ? dummyObj.totalAmount:formik.values.totalAmount} className="w-[100%] outline-1"/>
        {formik.errors.totalAmount ? <div>{formik.errors.totalAmount}</div> : null}
      </div>
      
      <div className="w-[100%]">
        <label>Payment terms</label>
        <br />
        <input type="number" name="paymentTerms" onChange={formik.handleChange} value={dummy ? dummyObj.paymentTerms:formik.values.paymentTerms} className="w-[100%] outline-1"/>
        {formik.errors.paymentTerms ? <div>{formik.errors.paymentTerms}</div> : null}
      </div>
      </article>

    <article className="flex gap-2">
      <div className="w-[100%]">
        <label>Invoice Due Date</label>
        <br />
        <input type="date" name="invoiceDueDate" onChange={formik.handleChange} value={dummy ? dummyObj.invoiceDueDate:formik.values.invoiceDueDate} className="w-[100%] outline-1"/>
        {formik.errors.invoiceDueDate ? <div>{formik.errors.invoiceDueDate}</div> : null}
      </div>

      <div className="w-[100%]">
        <label>Gl post Date</label>
        <br />
        <input type="date" name="glPostDate" onChange={formik.handleChange} value={dummy ?  dummyObj.glPostDate:formik.values.glPostDate} className="w-[100%] outline-1"/>
        {formik.errors.glPostDate ? <div>{formik.errors.glPostDate}</div> : null}
      </div>
      </article>
      
      <div>
        <label>Invoice Description</label>
        <br />
        <input name="invoiceDescription" onChange={formik.handleChange} value={dummy ? dummyObj.invoiceDescription:formik.values.invoiceDescription} className="w-full outline-1"/>
        {formik.errors.invoiceDescription ? <div>{formik.errors.invoiceDescription}</div> : null}
      </div>
      </section>

      <h2 className="font-bold">Expense Details</h2>
      <section>

        <article className="flex gap-2">
      <div className="w-[100%]">
        <label>Line Amount</label>
        <br />
        <input type="number" name="lineAmount" onChange={formik.handleChange} value={dummy ? dummyObj.lineAmount:formik.values.lineAmount} className="w-[100%] outline-1"/>
        {formik.errors.lineAmount ? <div>{formik.errors.lineAmount}</div> : null}
      </div>
      <div className="w-[100%]">
        <label>Department</label>
        <br />
        <input name="department" onChange={formik.handleChange} value={dummy ? dummyObj.department:formik.values.department} className="w-[100%] outline-1"/>
        {formik.errors.department ? <div>{formik.errors.department}</div> : null}
      </div>
      </article>

      <article className="flex gap-2">
      <div className="w-[100%]">
        <label>Account</label>
        <br />
        <input name="account" onChange={formik.handleChange} value={dummy ? dummyObj.account:formik.values.account} className="w-[100%] outline-1"/>
        {formik.errors.account ? <div>{formik.errors.account}</div> : null}
      </div>
      <div className="w-[100%]">
        <label>Location</label>
        <br />
        <input name="location" onChange={formik.handleChange} value={dummy ? dummyObj.location:formik.values.location} className="w-[100%] outline-1"/>
        {formik.errors.location ? <div>{formik.errors.location}</div> : null}
      </div>
      </article>


      <div>
        <label>Description</label>
        <br />
        <input name="description" onChange={formik.handleChange} value={dummy ? dummyObj.description:formik.values.description} className="w-full outline-1"/>
      </div>
      </section>
      
    </form>
    <br />
    <div className="flex justify-between">
    <button type="submit" onClick={()=>setDummy(!dummy)} >{dummy ? "Clear dummy data":"Show Dummy data"}</button>
    <button type="submit" onClick={()=>{
      localStorage.removeItem("invoiceForm");
      window.location.href="/"
      }}>Clear form</button>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>alert("Data Saved SuccessFully")}>Submit & Save</button>
    
    </div>

    </div>
    </div>
  );
};

export default InvoiceForm;
