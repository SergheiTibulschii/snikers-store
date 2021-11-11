import React, { CSSProperties, FC } from 'react'
import { Variant } from '../../types/common'
import styled, { css } from 'styled-components'
import { COLORS } from '../../constants'

const styles: Record<Variant, CSSProperties> = {
    primary: {
        '--bg': COLORS.primary,
    } as CSSProperties,
    secondary: {
        '--bg': COLORS.secondary,
    } as CSSProperties,
}

interface Props {
    variant: Variant
    className?: string
}
const Label: FC<Props> = ({ variant, className, children }) => {
    return (
        <Container className={className} style={styles[variant]}>
            {children}
        </Container>
    )
}

export const Container = styled.div(
    () => css`
        background-color: var(--bg);
        border-radius: 2px;
        padding: 8px 10px;
        font-size: var(--text-sm);
        font-weight: var(--font-bold);
        color: var(--clr-white);
    `
)

export default Label
