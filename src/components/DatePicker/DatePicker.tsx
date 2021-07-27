

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components';


type IDatePicker = {
  className?:string
  onChange?: (...args: any[]) => void
  startDate?: any
};



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePick = (props: IDatePicker) => {
    const { className, onChange, startDate } = props;
  return (
    <div className={className}>
      <DatePicker selected={startDate} onChange={onChange} />
    </div>
  );
};

export default styled(DatePick)``;