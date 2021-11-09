import { css } from 'styled-components'
import { COLORS, WEIGHTS } from '../constants'

export const cssVariables = css`
    :root {
        --clr-white: ${COLORS.white};
        --clr-gray-100: ${COLORS.gray['100']};
        --clr-gray-300: ${COLORS.gray['300']};
        --clr-gray-500: ${COLORS.gray['500']};
        --clr-gray-700: ${COLORS.gray['700']};
        --clr-gray-900: ${COLORS.gray['900']};
        --clr-primary: ${COLORS.primary};
        --clr-secondary: ${COLORS.secondary};

        --text-sm: 0.875rem;
        --text-base: 1rem;
        --text-md: 1.125rem;
        --text-lg: 1.5rem;
        --font-normal: ${WEIGHTS.normal};
        --font-medium: ${WEIGHTS.medium};
        --font-bold: ${WEIGHTS.bold};
        --font-extra-bold: ${WEIGHTS.extra};
        --ff-primary: 'Raleway', sans-serif;
    }
`
