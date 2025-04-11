import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  invoiceNumber: Yup.string().required("Required"),
  invoiceDate: Yup.date().required("Required"),
  totalAmount: Yup.number().required("Required"),
  invoiceDescription: Yup.string().required("Required"),
  lineAmount: Yup.number().required("Required"),
  department: Yup.string().required("Required"),
  account: Yup.string().required("Required"),
  location: Yup.string().required("Required")
});

const InvoiceForm = () => {
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
    <form onSubmit={formik.handleSubmit} className="p-6  flex gap-4 justify-center">
      <section>
      <div>
        <label>Vendor</label>
        <br />
        <input name="vendor" onChange={formik.handleChange} value={formik.values.vendor} className=" outline-1" />
        {formik.errors.vendor ? <div>{formik.errors.vendor}</div> : null}
      </div>
      <div>
        <label>Invoice Number</label>
        <br />
        <input name="invoiceNumber" onChange={formik.handleChange} value={formik.values.invoiceNumber} className="outline-1"/>
        {formik.errors.invoiceNumber ? <div>{formik.errors.invoiceNumber}</div> : null}
      </div>
      <div>
        <label>Invoice Date</label>
        <br />
        <input type="date" name="invoiceDate" onChange={formik.handleChange} value={formik.values.invoiceDate} className="outline-1"/>
        {formik.errors.invoiceDate ? <div>{formik.errors.invoiceDate}</div> : null}
      </div>
      <div>
        <label>Total Amount</label>
        <br />
        <input type="number" name="totalAmount" onChange={formik.handleChange} value={formik.values.totalAmount} className="outline-1"/>
        {formik.errors.totalAmount ? <div>{formik.errors.totalAmount}</div> : null}
      </div>
      
      
      <div>
        <label>Invoice Description</label>
        <br />
        <input name="invoiceDescription" onChange={formik.handleChange} value={formik.values.invoiceDescription} className="outline-1"/>
        {formik.errors.invoiceDescription ? <div>{formik.errors.invoiceDescription}</div> : null}
      </div>
      </section>
      <section>
      <div>
        <label>Line Amount</label>
        <br />
        <input type="number" name="lineAmount" onChange={formik.handleChange} value={formik.values.lineAmount} className="outline-1"/>
        {formik.errors.lineAmount ? <div>{formik.errors.lineAmount}</div> : null}
      </div>
      <div>
        <label>Department</label>
        <br />
        <input name="department" onChange={formik.handleChange} value={formik.values.department} className="outline-1"/>
        {formik.errors.department ? <div>{formik.errors.department}</div> : null}
      </div>
      <div>
        <label>Account</label>
        <br />
        <input name="account" onChange={formik.handleChange} value={formik.values.account} className="outline-1"/>
        {formik.errors.account ? <div>{formik.errors.account}</div> : null}
      </div>
      <div>
        <label>Location</label>
        <br />
        <input name="location" onChange={formik.handleChange} value={formik.values.location} className="outline-1"/>
        {formik.errors.location ? <div>{formik.errors.location}</div> : null}
      </div>
      <div>
        <label>Description</label>
        <br />
        <input name="description" onChange={formik.handleChange} value={formik.values.description} className="outline-1"/>
      </div>
      </section>
      
    </form>
    <div className="flex justify-end">
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit & Save</button>
    </div>
    </div>
  );
};

export default InvoiceForm;
