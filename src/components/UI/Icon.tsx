import React, { CSSProperties } from 'react'
import styled from 'styled-components'

import { ReactComponent as ShoppingBagSvg } from '../../assets/icons/shopping-bag.svg'
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg'
import { ReactComponent as BurgerSvg } from '../../assets/icons/burger.svg'
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg'
import { ReactComponent as ChevronDownSvg } from '../../assets/icons/chevron-down.svg'

export type Icons = 'shopping-bag' | 'search' | 'burger' | 'close' | 'chevron-down'
const icons: Record<Icons, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
    'shopping-bag': ShoppingBagSvg,
    search: SearchSvg,
    burger: BurgerSvg,
    close: CloseSvg,
    'chevron-down': ChevronDownSvg,
}
interface Props {
    id: Icons
    size?: number
    strokeWidth?: number
    className?: string
}
const Icon = ({ id, size = 24, strokeWidth = 1, className }: Props) => {
    const Component = icons[id]

    if (!Component) {
        throw new Error(`No icon found for ID: ${id}`)
    }

    return (
        <Wrapper
            style={
                {
                    '--size': size + 'px',
                    '--stroke-width': strokeWidth + 'px',
                } as CSSProperties
            }
            className={className}
        >
            <Component />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: var(--size);
    height: var(--size);

    & > svg {
        display: block;
        width: 100%;
        height: 100%;
        stroke-width: var(--stroke-width);
    }
`

export default Icon
