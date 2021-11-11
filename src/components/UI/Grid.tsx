import React, { CSSProperties, FC } from 'react'
import styled, { css } from 'styled-components'

interface Props {
    lg?: number
    md?: number
    sm?: number
}

const Grid: FC<Props> = ({ lg = 3, md = 2, sm = 1, children }) => {
    return (
        <Container
            style={
                {
                    '--grid-lg': lg,
                    '--grid-md': md,
                    '--grid-sm': sm,
                } as CSSProperties
            }
        >
            {children}
        </Container>
    )
}

export const Container = styled.div(
    () => css`
        min-height: 100%;
        display: grid;
        grid-template-columns: repeat(var(--grid-sm), 1fr);
        row-gap: 32px;

        @media (min-width: 640px) {
            grid-template-columns: repeat(var(--grid-md), 1fr);
            column-gap: 36px;
        }

        @media (min-width: 768px) {
            grid-template-columns: repeat(var(--grid-sm), 1fr);
        }

        @media (min-width: 840px) {
            grid-template-columns: repeat(var(--grid-md), 1fr);
        }

        @media (min-width: 1140px) {
            grid-template-columns: repeat(var(--grid-lg), 1fr);
            row-gap: 60px;
        }
    `
)

export default Grid
