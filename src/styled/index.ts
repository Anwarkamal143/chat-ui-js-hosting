import { StyleClosetTheme } from "./theme"
import styledComponents, {
    ThemedStyledComponentsModule,
} from "styled-components"
export * from "./theme"
export * from "./Global.styled"
export * from "./StyledLayoutWrapper"



const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as Partial<ThemedStyledComponentsModule<StyleClosetTheme>>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
