import React, { ReactElement } from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { RSelct } from "../Select";
import * as yup from 'yup';
import { FormikValues, useFormik } from "formik";
type IChatProps = {
  className?: string;
  classes?: string;
  handleClose?: () => void
  onSubmit?: (...args: any[] ) => void
};
const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required!"),
  email: yup
    .string()
    .email("Email is not valid!")
    .required("Email is required!"),
  message: yup.string().required("Message is required!"),
  phone: yup.string().required("phone is required!"),
  option: yup.array()
    .min(1, "Pick at least 1 tags")
    .of(
      yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
      })
    ),
});
const Callback = (props: IChatProps): ReactElement => {
  const { className, classes, handleClose, onSubmit } = props;

const {
  values,
  handleChange,
  touched,
  handleBlur,
  errors,
  handleSubmit,
  setFieldTouched,
  isSubmitting
} = useFormik({
  initialValues: {
    name: "",
    email: "",
message: '',
phone: '',
option: {
  label: '', value: ''
}
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
          title="Request a callback "
          className=" bg-blue"
          onClose={handleClose}
        />
        <div className="scrolled-area">
          <div className="content-area">
            <span className="title-text">
              Please Fill in the information and a customer service
              representative will be in touch with you{" "}
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className="form"
            >
              <div className="field">
                <label htmlFor="request-name">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={values.name}
                  type="text"
                  className="form-control"
                  id="request-name"
                  placeholder="Enter Name"
                  name="name"
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
                <label htmlFor="request-email">
                  Email <span className="required">*</span>
                </label>
                <input
                  value={values.email}
                  type="text"
                  className="form-control"
                  id="request-email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                />
                {errors.email && touched.email && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.email}
                  </div>
                )}
              </div>
              <div className="field">
                <label htmlFor="request-phone">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  value={values.phone}
                  type="text"
                  className="form-control"
                  id="request-phone"
                  placeholder="Enter Phone number"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.phone}
                  </div>
                )}
              </div>
              <div className="field">
                <label htmlFor="request-phone">
                  Country <span className="required">*</span>
                </label>
                <div className="select-holder">
                  <RSelct
                    className="react-select"
                    options={[
                      { value: "Usa", label: "USA" },
                      { value: "Canada", label: "Canada" },
                      { value: "England", label: "England" },
                    ]}
                    selected={values.option}
                    name="option"
                    onChange={handleChange}
                    onBlur={(op: any) => setFieldTouched("option", true)}
                  />
                  {errors.option && touched.option && (
                    <div style={{ color: "red", marginTop: ".5rem" }}>
                      {errors.option}
                    </div>
                  )}
                </div>
              </div>
              <div className="field">
                <label htmlFor="request-message">
                  MESSAGE <span className="require">*</span>
                </label>
                <textarea
                  id="request-message"
                  placeholder="Enter Message"
                  className="form-control"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></textarea>
                {errors.message && touched.message && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.message}
                  </div>
                )}
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

export default styled(Callback)`
  
`;
