import React, { ReactNode } from 'react'
import Superheader from '../Superheader'
import Header from '../Header'
import Sidebar from '../Sidebar'
import styled, { css } from 'styled-components'

interface Props {
    children: ReactNode
}
const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Superheader />
            <Header />
            <Content>
                <Sidebar />
                <Main>{children}</Main>
            </Content>
        </>
    )
}

const Content = styled.div(
    () => css`
        margin-top: 70px;
        display: flex;
        flex: 1;
    `
)
const Main = styled.div(
    () => css`
        flex: 1 1 500px;
    `
)

export default MainLayout
