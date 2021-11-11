import React from 'react'
import styled, { css } from 'styled-components'
import { useScreenSize } from '../providers/ScreenSizeProvider'
import Icon from './UI/Icon'
import { useMainLayout } from './Layout/MainLayout'

const Header = () => {
    const { toggleMobileMenu } = useMainLayout()
    const { isLarge } = useScreenSize()
    return (
        <Container>
            <Logo>Sole&Ankle</Logo>
            {isLarge ? (
                <NavMenu>
                    <NavLink isActive>Sale</NavLink>
                    <NavLink>New Releases</NavLink>
                    <NavLink>Men</NavLink>
                    <NavLink>Women</NavLink>
                    <NavLink>Kids</NavLink>
                    <NavLink>Collections</NavLink>
                </NavMenu>
            ) : (
                <MobileMenu>
                    <MobileMenuBtn>
                        <Icon id='shopping-bag' strokeWidth={2} />
                    </MobileMenuBtn>
                    <MobileMenuBtn>
                        <Icon id='search' />
                    </MobileMenuBtn>
                    <MobileMenuBtn onClick={toggleMobileMenu}>
                        <Icon id='burger' />
                    </MobileMenuBtn>
                </MobileMenu>
            )}
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

export const MobileMenu = styled.nav(
    () => css`
        margin-left: auto;
        display: flex;
        gap: 32px;
    `
)
export const MobileMenuBtn = styled.button(
    () => css`
        background: none;
        border: none;
        color: inherit;
        margin: 0;
        padding: 0;
        cursor: pointer;
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
