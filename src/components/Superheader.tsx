import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as ShoppingSvg } from '../assets/icons/shopping-bag.svg'
import IconInput from './UI/Input'

const Superheader = () => {
    return (
        <Container>
            <Message>Free shipping on domestic orders over $75!</Message>

            <Search size='small' width={175} icon='search' placeholder='Search...' />
            <HelpLink href='/help'>Help</HelpLink>
            <ShoppingBagLink href='/shopping'>
                <ShoppingSvg />
            </ShoppingBagLink>
        </Container>
    )
}

const Container = styled.div(
    () => css`
        display: flex;
        align-items: center;
        padding: 12px 32px;
        gap: 24px;
        background-color: var(--clr-gray-900);
        color: var(--clr-white);
    `
)

export const Message = styled.div(
    () => css`
        font-size: var(--text-sm);
        font-weight: var(--font-normal);
    `
)

export const Search = styled(IconInput)(
    () => css`
        margin-left: auto;
    `
)

export const HelpLink = styled.a(
    () => css`
        font-size: var(--text-sm);
        font-weight: var(--font-normal);
    `
)

export const ShoppingBagLink = styled.a(
    () => css`
        display: flex;
        svg {
            stroke: currentColor;
        }
    `
)

export default Superheader
