import App from "../App";
import { HtmlTagWrapper } from "./html-tag-wrapper";
// import { ChatWidget } from "./Pages/ChatWidget";

// const ChatWidget = HtmlTagWrapper(App);
// const ChatWidget = { ChatWidget: WrappedSimpleCalendar };
export function Init(config: any) {
    console.log({config})
return HtmlTagWrapper(App, config);
}
// export default Init;
// export default ChatWidget
