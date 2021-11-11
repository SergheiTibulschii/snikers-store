import React, { FC } from 'react'
import styled, { css } from 'styled-components'

interface CrumbProps {
    href: string
}

export const Crumb: FC<CrumbProps> = ({ href, children }) => {
    return (
        <BreadcrumbItem>
            <CrumbLink href={href}>{children}</CrumbLink>
        </BreadcrumbItem>
    )
}

const Breadcrumbs: FC = ({ children }) => {
    return (
        <nav aria-label='bread-crumb'>
            <BreadcrumbList>{children}</BreadcrumbList>
        </nav>
    )
}

export const BreadcrumbList = styled.ol(
    () => css`
        padding: 0;
        margin: 0;
        list-style-type: none;
    `
)

export const BreadcrumbItem = styled.li(
    () => css`
        display: inline-block;
        font-size: var(--text-sm);
        font-weight: var(--font-normal);
        color: var(--clr-gray-700);

        &:not(:first-of-type) {
            &:before {
                content: '/';
                margin: 0 5px;
            }
        }
    `
)

export const CrumbLink = styled.a(
    () => css`
        color: inherit;
        text-decoration: none;

        &:hover {
            text-decoration: revert;
        }
    `
)

export default Breadcrumbs
