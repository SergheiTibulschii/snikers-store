import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Breadcrumbs, { Crumb } from './UI/Breadcrumbs'
import { ISidebarItem, sidebarItems } from '../data/sidebar'
import { useSearchParams } from 'react-router-dom'
import { useMainLayout } from './Layout/MainLayout'

interface Props {
    items: ISidebarItem[]
}
const Sidebar = ({ items }: Props) => {
    const { activeCategory, setActiveCategory } = useMainLayout()
    const [, setSearchParams] = useSearchParams()

    useEffect(() => {
        if (activeCategory) {
            const params = new URLSearchParams({ category: activeCategory.value })
            setSearchParams(params)
        }
    }, [activeCategory])

    const handleNavItemClick = (value: ISidebarItem) => {
        setActiveCategory(value)
    }

    return (
        <Container>
            <Breadcrumbs>
                <Crumb href='/'>Home</Crumb>
                <Crumb href='/sale'>Sale</Crumb>
                <Crumb href='/sale/shoes'>Shoes</Crumb>
            </Breadcrumbs>
            <Navigation aria-label='sidebar-navigation'>
                <NavList>
                    {items.map((item) => (
                        <NavItem
                            isActive={item.value === activeCategory?.value}
                            onClick={() => handleNavItemClick(item)}
                        >
                            {item.text}
                        </NavItem>
                    ))}
                </NavList>
            </Navigation>
        </Container>
    )
}

export const Container = styled.aside(
    () => css`
        flex: 0 100000 250px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    `
)

export const Navigation = styled.nav(() => css``)

export const NavList = styled.ul(() => css``)

export const NavItem = styled.li<{ isActive?: boolean }>(
    ({ isActive }) => css`
        font-size: var(--text-base);
        font-weight: var(--font-medium);
        line-height: 2;
        color: var(--clr-gray-900);
        cursor: pointer;
        transition: color 0.25s;

        ${isActive &&
        css`
            color: var(--clr-primary);
        `}

        &:hover {
            color: var(--clr-primary);
        }
    `
)

export default Sidebar
