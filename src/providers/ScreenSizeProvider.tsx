import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { debounce } from '../utils/helperFunctions/debounce'

interface IScreenSizeContext {
    isLarge: boolean
    isMedium: boolean
    isSmall: boolean
}
export const ScreenSizeContext = createContext<IScreenSizeContext>({} as IScreenSizeContext)

export const ScreenSizeProvider: FC = ({ children }) => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    const debouncedResize = useCallback(debounce(handleResize, 200), [])

    useEffect(() => {
        window.addEventListener('resize', debouncedResize)

        return () => window.removeEventListener('resize', debouncedResize)
    }, [debouncedResize])

    const size = useMemo(
        () => ({
            isLarge: width >= 1020,
            isMedium: width >= 768,
            isSmall: width < 768,
        }),
        [width]
    )

    return <ScreenSizeContext.Provider value={size}>{children}</ScreenSizeContext.Provider>
}

export const useScreenSize = () => {
    return useContext(ScreenSizeContext)
}
