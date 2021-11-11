import React from 'react'
import styled, { css } from 'styled-components'
import GlobalStyles from './styles/globalStyles'
import MainLayout from './components/Layout/MainLayout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScreenSizeProvider } from './providers/ScreenSizeProvider'
import HomePage from './components/pages/Home.page'
import SalePage from './components/pages/Sale.page'
import ShoesPage from './components/pages/Shoes.page'

function App() {
    return (
        <ScreenSizeProvider>
            <GlobalStyles />
            <Router>
                <Container>
                    <MainLayout>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/sale' element={<SalePage />} />
                            <Route path='/sale/shoes' element={<ShoesPage />} />
                        </Routes>
                    </MainLayout>
                </Container>
            </Router>
        </ScreenSizeProvider>
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
