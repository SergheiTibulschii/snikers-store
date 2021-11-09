import React from 'react'
import styled, { css } from 'styled-components'

const Sidebar = () => {
    return <Container>Sidebar</Container>
}

export const Container = styled.aside(
    () => css`
        flex: 0 100000 312px;
        background: hsl(0deg, 0%, 50%);
    `
)
export default Sidebar
