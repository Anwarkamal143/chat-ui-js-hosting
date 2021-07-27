import  { ReactElement} from 'react'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styled from 'styled-components';
type ITimePicker = {
  className?: string;
  parentClass?: string;
  pickerClass?: string;
  name?: string;
  onChange?: (...args: any[]) => void
  value?: any
} 
function TimePick(props: ITimePicker): ReactElement {
    const {className, parentClass, pickerClass, name, onChange, value, ...rest} = props


  return (
    // <TimePicker onChange={yourFunctionName} />
    <div className={`${className} ${parentClass}`}>

      <DatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        {...rest}
      />
    </div>
  );
}

export default styled(TimePick)``;




