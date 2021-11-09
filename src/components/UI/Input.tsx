import React, { CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import Icon, { Icons } from './Icon'

const iconSize = {
    small: 17,
    large: 24,
}

const sizeVars = {
    small: {
        '--font-size': '14px',
        '--padding': '4px 4px 4px 26px',
        '--border': '1px solid',
    },
    large: {
        '--font-size': '18px',
        '--padding': '9px 25px 9px 40px',
        '--border': '2px solid',
    },
}

interface Props {
    size: 'small' | 'large'
    width: number
    icon: Icons
    className?: string
    placeholder: string
}
const IconInput = ({ size, width, icon, placeholder, className }: Props) => {
    return (
        <InputContainer
            className={className}
            style={
                {
                    ...{ '--width': `${width}px` },
                    ...sizeVars[size],
                } as CSSProperties
            }
        >
            <Input placeholder={placeholder} />
            <InputIcon size={iconSize[size]} id={icon} />
        </InputContainer>
    )
}

const InputIcon = styled(Icon)(
    () => css`
        position: absolute;
        top: 50%;
        left: 3px;
        transform: translateY(-55%);
        pointer-events: none;
    `
)

const Input = styled.input`
    border: none;
    border-bottom: var(--border);
    padding: var(--padding);
    outline-offset: 2px;
    color: inherit;
    font-size: inherit;
    width: 100%;
    font-weight: bold;
    background: none;

    &:focus {
        outline: 2px solid var(--clr-secondary);
    }

    &::placeholder {
        color: var(--clr-gray-500);
    }
`

const InputContainer = styled.div(
    () => css`
        position: relative;
        color: var(--clr-gray-500);
        font-size: var(--text-sm);
        width: var(--width);
        transition: color 0.25s;

        &:hover {
            color: var(--clr-gray-300);
        }
    `
)

export default IconInput
