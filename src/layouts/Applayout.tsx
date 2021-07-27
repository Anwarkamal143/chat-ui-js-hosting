
import { StyledLayoutWrapper } from "../styled"
import styled from "styled-components"


export type LayoutType = {
    variant?: "small" | "regular"
    children: React.ReactNode | JSX.Element | React.ReactNode[]
    styles?: React.CSSProperties
    otherProps?: Record<string, unknown>
}
export const AppLayoutWrapper = styled.div``

export function AppLayout(props: LayoutType) {
    const { otherProps, children, styles } = props
    return (
        <StyledLayoutWrapper>
            <AppLayoutWrapper style={styles} {...otherProps}>
             {children}

            </AppLayoutWrapper>
        </StyledLayoutWrapper>
    )
}
