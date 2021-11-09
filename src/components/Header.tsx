import React from 'react'
import styled, { css } from 'styled-components'

const Header = () => {
    return (
        <Container>
            <Logo>Sole&Ankle</Logo>
            <NavMenu>
                <NavLink isActive>Sale</NavLink>
                <NavLink>New Releases</NavLink>
                <NavLink>Men</NavLink>
                <NavLink>Women</NavLink>
                <NavLink>Kids</NavLink>
                <NavLink>Collections</NavLink>
            </NavMenu>
        </Container>
    )
}

const Container = styled.header(
    () => css`
        display: flex;
        align-items: center;
        padding: 19px 32px;
        border-bottom: 1px solid var(--clr-gray-300);
    `
)

export const Logo = styled.div(
    () => css`
        font-size: var(--text-lg);
        font-weight: var(--font-extra-bold);
    `
)

export const NavMenu = styled.nav(
    () => css`
        display: flex;
        gap: 48px;
        margin: auto;
    `
)

export const NavLink = styled.a<{ isActive?: boolean }>(
    ({ isActive }) => css`
        font-size: vart(--text-md);
        font-weight: var(--font-medium);
        text-transform: uppercase;

        ${isActive &&
        css`
            color: var(--clr-secondary);
        `}
    `
)

export default Header
