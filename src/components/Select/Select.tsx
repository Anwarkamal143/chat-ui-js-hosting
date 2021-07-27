import Select from "react-select";
import styled from "styled-components";
type ISelectProps = {
  className?: string;
  options?: any[];
  onChange?: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  selected?: { value: any; label: any };
  name?: string;
  placeholder?:string
};
const optionss = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const RSelect = (props: ISelectProps) => {
  const {
    className,
    options = optionss,
    onChange,
    selected,
    name,
    placeholder,
    onBlur,
  } = props;
  return (
    <div className={className}>
      <Select
        onChange={onChange}
        options={options}
        onBlur={onBlur}
        
        placeholder={placeholder}
        {...(selected?.value ? { value: selected } : {})}
        name={name}
      />
    </div>
  );
};

export default styled(RSelect)``;
