
import  ReactDOM from 'react-dom';
import "@babel/polyfill";
function parseValue(value: any) {
  if (value === '' || value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (Number(value).toString() === value) {
    return Number(value);
  }

  return value;
}

function parseKey(key: string) {
  const parts = key.split('-');
  const newParts = [parts[0]];
  for (let i = 1; i < parts.length; i++) {
    const firstLetter = parts[i].slice(0, 1);
    const restOfLetters = parts[i].slice(1);
    const newPart = firstLetter.toUpperCase() + restOfLetters;
    newParts.push(newPart);
  }
  return newParts.join('');
}

function attrToObj(attrs: NamedNodeMap) {
  const attrsObj: { [key: string]: unknown } = {};
  const length = attrs.length;
  for (let i = 0; i < length; i++) {
    const { name, value } = attrs[i];
    attrsObj[parseKey(name)] = parseValue(value);
  }
  return attrsObj;
}

function HtmlTagWrapper(Component: (props?: any) => JSX.Element, config: any) {

  let el = document.getElementById('ChatWidget');
  let props :any= {}
  const attrs = el?.attributes;
  if (attrs) {
    props = attrToObj(attrs);
  }
if(config){
  props =Object.assign(props, config);
}
  return ReactDOM.render(<Component {...props} />, el);
}


export { HtmlTagWrapper };
