import { DetailedHTMLProps, HtmlHTMLAttributes } from "react"
import styled, { css } from "styled-components"

export type PageLayoutType = DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLElement>,
    HTMLElement
> & {
    variant?: "small" | "regular"
    children: React.ReactNode | JSX.Element | React.ReactNode[]
    styles?: React.CSSProperties
    otherProps?: Record<string, unknown>
}
export const PageLayoutWrapper = styled.div<{ variant?: string }>`
    display: block;
    ${({ variant }) => {
        switch (variant) {
            case "small":
                return css`
                    width: 50%;
                `
            case "regular":
                return css`
                    width: 100%;
                `
        }
        return
    }}
`

export function PageLayout(props: PageLayoutType) {
    const { otherProps, variant = "regular", children, styles } = props
    return (
        <PageLayoutWrapper variant={variant} style={styles} {...otherProps}>
            {children}
        </PageLayoutWrapper>
    )
}
