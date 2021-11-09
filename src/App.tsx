import React from 'react'
import styled, { css } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import MainLayout from './components/Layout/MainLayout'

function App() {
    return (
        <Container>
            <GlobalStyles />
            <MainLayout>
                <div>Content</div>
            </MainLayout>
        </Container>
    )
}

export const Container = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        height: 100%;
    `
)

export default App
