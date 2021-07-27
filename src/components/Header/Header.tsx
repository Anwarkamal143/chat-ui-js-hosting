
import styled from "styled-components";



type IHeaderProps = {
  className?: string;
  onClose?: (...args: any[]) => void;
  title?: string
};

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Header = (props: IHeaderProps) => {
  const { className, onClose, title } = props;
  return (
    <strong className={`${className} heading-box`}>
      {title} <span className="close" onClick={onClose}></span>
    </strong>
  );
};

export default styled(Header)``;
