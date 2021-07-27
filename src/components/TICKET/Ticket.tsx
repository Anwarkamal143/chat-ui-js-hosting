import React, { ReactElement } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import * as yup from 'yup';
import { FormikValues, useFormik } from "formik";

type IChatProps = {
  className?: string;
  classes?:string
  handleClose?: () => void
  onSubmit?: (...args:any[]) => void
};
const validationSchema = yup.object().shape({
  name: yup
    .string()

    .required("Name is required!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  inquiry: yup.string().required("Name is required!"),
  accountNumber: yup
    .string()
    .required("Name is required!"),
  // topics: yup.array()
  //   .min(1, "Pick at least 1 tags")
  //   .of(
  //     yup.object().shape({
  //       label: yup.string().required(),
  //       value: yup.string().required(),
  //     })
  //   ),
});
const Ticket = (props: IChatProps): ReactElement => {
  const { className, classes, handleClose, onSubmit } = props;

const {
  values,
  handleChange,
  isSubmitting,
  touched,
  handleBlur,
  errors,
  handleSubmit,
} = useFormik({
  initialValues: {
    name: "",
    email: "",
    inquiry: "",
    accountNumber: "",
  },
  validationSchema,
  onSubmit: (values: FormikValues) => {
    console.log({ values });
    onSubmit?.();
  },
});

  return (
    <div className={`${className} ${classes}`}>
      <div className="content-box">
        <Header
          title=" Submit a ticket"
          className=" bg-blue"
          onClose={handleClose}
        />
        <div className="scrolled-area">
          <div className="content-area">
            <span className="title-text">
              Please provide information below to submit a service request:{" "}
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className="form"
            >
              <div className="field">
                <label htmlFor="ticket-name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ticket-name"
                  placeholder="Enter Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="field">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="field">
                <label htmlFor="inquiry">
                  Inquiry <span className="required">*</span>
                </label>
                <textarea
                  id="inquiry"
                  placeholder="Your inquiry"
                  className="form-control"
                  name="inquiry"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.inquiry}
                ></textarea>
                {errors.inquiry && touched.inquiry && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.inquiry}
                  </div>
                )}
              </div>
              <div className="field">
                <label htmlFor="account">Account Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="account"
                  name="accountNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accountNumber}
                />
              </div>
              <button
                type="submit"
                className="button button-primary"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Ticket)`
  
`;
