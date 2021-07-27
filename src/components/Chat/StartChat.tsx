
import React, { ReactElement, useRef } from "react";
import styled from "styled-components";
import { DatePicker } from "../DatePicker";
import { Header } from "../Header";
import { RSelct } from "../Select";
import { TimePicker } from "../TimePicker";

import * as yup from 'yup';
import { FormikValues, useFormik } from "formik";
type IChatProps = {
  className?: string;
  classes?:string
  onSubmit?: (...args: any[]) =>  void
  handleClose?: ()=> void
};
const validationSchema = yup.object().shape({
  name: yup.string().trim()

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
const Startchat = (props: IChatProps): ReactElement => {
  const { className, classes, handleClose, onSubmit } = props;
  const ref = useRef<HTMLDivElement>(null)
const { values, handleChange, setFieldValue, touched,handleBlur, errors, handleSubmit } = useFormik({
  initialValues: {
    name: "",
    message: "",
    date: new Date(),
    time: new Date(),
    option: {
      label: '',
      value: ''
    }
  },
  validationSchema,
  onSubmit: (values: FormikValues) => {
    console.log(values.date);
    console.log({values});
    onSubmit?.(values.name, values.message)
  },
});
const validation = (value: string) => {
  if (!value) {
    ref.current && ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
  return (
    <div className={`${className} ${classes}`}>
      <div className="content-box">
        <Header title="New Conversation" onClose={handleClose} />
        <div className="scrolled-area">
          <div className="content-area" ref={ref}>
            <span className="title-text">
              To server you better, please answer the following questions:{" "}
            </span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validation(values.name);
                handleSubmit(e);
              }}
              className="form"
            >
              <div className="field">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  value={values.name}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={ handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <div style={{ color: "red", marginTop: ".5rem" }}>
                    {errors.name}
                  </div>
                )}
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  value={values.message}
                  id="message"
                  name="message"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="field">
                <label htmlFor="date">Date</label>
                <DatePicker
                  startDate={values.date}
                  onChange={(op: any) => {
                    setFieldValue("date", op);
                  }}
                />
              </div>
              <div className="field">
                <label htmlFor="time">Time</label>
                <TimePicker
                  name="time"
                  onChange={(op: any) => {
                    setFieldValue("time", op);
                  }}
                  value={values.time}
                />
              </div>
              <div className="field">
                <label htmlFor="select">Select an option</label>
                <div className="select-holder">
                  <RSelct
                    selected={values.option}
                    placeholder="select an option"
                    className="react-select"
                    name="option"
                    onChange={(op: any) => {
                      console.log({ op });
                      setFieldValue("option", op);
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="button">
                Start Chat
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Startchat)`
  
`;
