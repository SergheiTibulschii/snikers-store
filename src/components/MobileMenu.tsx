import React, { useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { useMainLayout } from './Layout/MainLayout'
import Icon from './UI/Icon'

const animationDuration = 0.35
const MobileMenu = () => {
    const [isDestroyed, setIsDestroyed] = useState(false)
    const { toggleMobileMenu } = useMainLayout()

    useEffect(() => {
        if (isDestroyed) {
            setTimeout(() => {
                toggleMobileMenu()
            }, animationDuration * 1000 + 150)
        }
    }, [isDestroyed])

    const destroyMobileMenu = () => {
        setIsDestroyed(true)
    }

    return (
        <Wrapper onClick={destroyMobileMenu} isDestroyed={isDestroyed}>
            <Container onClick={(event) => event.stopPropagation()}>
                <CloseBtn onClick={destroyMobileMenu}>
                    <Icon id='close' />
                </CloseBtn>

                <Nav>
                    <NavLink isActive>Sale</NavLink>
                    <NavLink>New Releases</NavLink>
                    <NavLink>Men</NavLink>
                    <NavLink>Women</NavLink>
                    <NavLink>Kids</NavLink>
                    <NavLink>Collections</NavLink>
                </Nav>
            </Container>
        </Wrapper>
    )
}

const Container = styled.div(
    () => css`
        position: absolute;
        display: flex;
        flex-direction: column;
        right: 0;
        width: 85vw;
        height: 100vh;
        background: var(--clr-white);
        transition: transform ${animationDuration}s;
        transform: translateX(0);

        animation: ${slideIn} ${animationDuration}s;
    `
)

const Wrapper = styled.div<{ isDestroyed: boolean }>(
    ({ isDestroyed }) => css`
        position: fixed;
        inset: 0;
        z-index: 1000;
        overflow: hidden;

        &:before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--clr-gray-700);
            transition: opacity ${animationDuration}s;
            opacity: 0.45;

            animation: ${appear} ${animationDuration}s;

            ${isDestroyed &&
            css`
                opacity: 0;
            `}
        }

        ${isDestroyed &&
        css`
            ${Container} {
                transform: translateX(100%);
            }
        `}
    `
)

export const NavLink = styled.a<{ isActive?: boolean }>(
    ({ isActive }) => css`
        font-size: var(--text-md);
        font-weight: var(--font-medium);
        text-transform: uppercase;
        transition: color 0.25s;
        cursor: pointer;

        ${isActive &&
        css`
            color: var(--clr-secondary);
        `}

        &:hover {
            color: var(--clr-secondary);
        }
    `
)

const Nav = styled.nav(
    () => css`
        display: flex;
        flex-direction: column;
        gap: 22px;
        margin: auto 0;
        padding-left: 32px;
    `
)

const CloseBtn = styled.button`
    background: none;
    border: none;
    color: inherit;
    position: absolute;
    top: 32px;
    right: 22px;
    cursor: pointer;
`

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.45;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`

export default MobileMenu
