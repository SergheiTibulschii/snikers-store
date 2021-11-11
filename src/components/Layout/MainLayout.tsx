import React, { createContext, Dispatch, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import Superheader from '../Superheader'
import Header from '../Header'
import Sidebar from '../Sidebar'
import styled, { css } from 'styled-components'
import { useScreenSize } from '../../providers/ScreenSizeProvider'
import MobileMenu from '../MobileMenu'
import { ISidebarItem, sidebarItems, SidebarItemType } from '../../data/sidebar'
import { useSearchParams } from 'react-router-dom'

interface IMainLayoutContext {
    isMobileMenuOpen: boolean
    toggleMobileMenu: VoidFunction
    activeCategory: ISidebarItem | null
    setActiveCategory: Dispatch<React.SetStateAction<ISidebarItem | null>>
    setSidebarCategory: Dispatch<React.SetStateAction<SidebarItemType | null>>
}
const MainLayoutContext = createContext<IMainLayoutContext>({} as IMainLayoutContext)

export const useMainLayout = () => {
    return useContext(MainLayoutContext)
}

interface Props {
    children: ReactNode
}
const MainLayout = ({ children }: Props) => {
    const { isMedium, isLarge } = useScreenSize()
    const [sidebarCategory, setSidebarCategory] = useState<SidebarItemType | null>(null)
    const [activeCategory, setActiveCategory] = useState<ISidebarItem | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [params] = useSearchParams()

    useEffect(() => {
        if (sidebarCategory) {
            const categoryParams = Array.from(params.entries())[0]
            if (categoryParams) {
                const [key, paramValue] = categoryParams
                if (key === 'category') {
                    const item = sidebarItems[sidebarCategory].find(({ value }) => value === paramValue)
                    if (item) {
                        setActiveCategory(item)
                    }
                }
            }
        }
    }, [sidebarCategory])

    const toggleMobileMenu = useCallback(() => {
        if (!isLarge) {
            setIsMobileMenuOpen((prev) => !prev)
        }
    }, [isLarge, setIsMobileMenuOpen])

    return (
        <MainLayoutContext.Provider
            value={{
                isMobileMenuOpen,
                toggleMobileMenu,
                activeCategory,
                setActiveCategory,
                setSidebarCategory,
            }}
        >
            {isLarge && <Superheader />}
            <Header />
            <Content>
                {isMedium && !!sidebarCategory && <Sidebar items={sidebarItems[sidebarCategory]} />}
                <Main>{children}</Main>
            </Content>

            {isMobileMenuOpen && <MobileMenu />}
        </MainLayoutContext.Provider>
    )
}

const Content = styled.div(
    () => css`
        display: flex;
        gap: 24px;
        flex: 1;
        padding: 0 32px;

        max-width: 1440px;
        margin: 70px auto 0;
    `
)
const Main = styled.main(
    () => css`
        flex: 1 1 525px;
    `
)

export default MainLayout
