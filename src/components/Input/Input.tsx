import {
    DetailedHTMLProps,
    InputHTMLAttributes,
    MutableRefObject,
    ReactElement,
    ReactNode,
    TextareaHTMLAttributes,
} from "react"
import {
    InputEl,
    InputElWrapper,
    InputWrapper,
    TextAreaWrapper,
} from "./Input.styled"

type InputField = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
export type TextareaFieldProps = DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    ref?: MutableRefObject<HTMLTextAreaElement>
    icon?: string | ReactNode
}
type Iconvariants = "fas" | "far" | "fal" | "fad" | "fab"
export type InputFieldProps = Exclude<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type"
> & {
    type?:
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
    ref?: MutableRefObject<HTMLInputElement>
    parentClasses?: string
    hasRightIcon?: boolean
    hasLeftIcon?: boolean
    leftIcon?: {
        icon: string | ReactNode
        variant?: Iconvariants
        ref?: MutableRefObject<HTMLInputElement>
        [key: string]: any
    }
    rightIcon?: {
        icon?: string | ReactNode
        variant?: Iconvariants
        ref?: MutableRefObject<HTMLInputElement>
        [key: string]: any
    }
}

export default function Input(props: InputFieldProps): ReactElement {
    const {
        hasRightIcon,
        hasLeftIcon,
        leftIcon,
        rightIcon,
        parentClasses,
        width,
        type = "text",
        ...rest
    } = props
    let LeftIcon: any = leftIcon?.icon
    let RightIcon: any = rightIcon?.icon
    if (hasLeftIcon && leftIcon?.icon) {
        const { icon, variant, ...rest } = leftIcon
        if (typeof LeftIcon !== "string") {
            LeftIcon = <LeftIcon {...rest} className="left" />
        } else {
            LeftIcon = <i {...rest} className={`${variant} ${LeftIcon} left`} />
        }
    }
    if (hasRightIcon && rightIcon?.icon) {
        const { icon, variant, ...rest } = rightIcon
        if (typeof RightIcon !== "string") {
            RightIcon = <RightIcon {...rest} className="right" />
        } else {
            RightIcon = (
                <i {...rest} className={`${variant} ${RightIcon} right`} />
            )
        }
    }
    return (
        <InputWrapper width={width} className={parentClasses} type={type}>
            {hasLeftIcon ? LeftIcon : null}
            <InputElWrapper>
                <InputEl {...rest} type={type} />
            </InputElWrapper>
            {hasRightIcon ? RightIcon : null}
        </InputWrapper>
    )
}
export const TextArea = function (props: TextareaFieldProps) {
    return (
        <TextAreaWrapper>
            <textarea {...props} />
        </TextAreaWrapper>
    )
}
TextArea.displayName = "TextArea"
Input.TextArea = TextArea
