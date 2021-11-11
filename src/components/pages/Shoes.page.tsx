import { IShoe } from '../../types/IShoe'
import styled, { css } from 'styled-components'
import { useMainLayout } from '../Layout/MainLayout'
import Grid from '../UI/Grid'
import SHOES from '../../data'
import { isLessThanHourAgo } from '../../utils/date'
import { formatPrice } from '../../utils/price'
import Label from '../UI/Label'
import { useEffect } from 'react'

type Props = IShoe
const Shoe = ({ slug, name, numOfColors, price, salePrice, releaseDate, imageSrc }: Props) => {
    const isJustReleased = isLessThanHourAgo(releaseDate)

    return (
        <ShoeContainer>
            <ShoeFigure>
                <img src={imageSrc} alt='' />
            </ShoeFigure>
            <ShoeDescription>
                <ShoeTitle title={name}>{name}</ShoeTitle>
                <ShoePrice isDiscount={!!salePrice}>{formatPrice(price)}</ShoePrice>
                <ShoeColors>{numOfColors} colors</ShoeColors>
                {salePrice && <ShoeDiscount>{formatPrice(salePrice)}</ShoeDiscount>}
            </ShoeDescription>

            {(!!salePrice || isJustReleased) && (
                <ShoeLabels>
                    {isJustReleased && <Label variant='secondary'>Just released!</Label>}
                    {!!salePrice && <Label variant='primary'>Sale</Label>}
                </ShoeLabels>
            )}
        </ShoeContainer>
    )
}

export const ShoeLabels = styled.div(
    () => css`
        position: absolute;
        top: 12px;
        right: -4px;

        display: grid;
        gap: 8px;
    `
)

export const ShoeContainer = styled.div(
    () => css`
        display: grid;
        grid-template-rows: 1fr auto;
        gap: 14px;
        position: relative;
        padding-bottom: 24px;
    `
)

export const ShoeDescription = styled.div(
    () => css`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr 1fr;
    `
)

export const ShoeColors = styled.div(
    () => css`
        color: var(--clr-gray-700);
    `
)

export const ShoeDiscount = styled.div(
    () => css`
        color: var(--clr-primary);
    `
)

export const ShoePrice = styled.div<{ isDiscount: boolean }>(
    ({ isDiscount }) => css`
        ${isDiscount &&
        css`
            text-decoration: line-through;
        `}
    `
)

export const ShoeTitle = styled.div(
    () => css`
        font-size: var(--text-base);
        font-weight: var(--font-medium);
        color: var(--var-gray-900);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 16px;
    `
)

export const ShoeFigure = styled.div(
    () => css`
        line-height: 1;

        & img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 16px 16px 4px 4px;
        }
    `
)

const ShoesPage = () => {
    const { activeCategory, setSidebarCategory } = useMainLayout()

    useEffect(() => {
        setSidebarCategory('shoes')
    }, [])

    return (
        <div>
            <Title>{activeCategory?.text}</Title>
            <Grid>
                {SHOES.map((shoe) => (
                    <Shoe key={shoe.slug} {...shoe} />
                ))}
            </Grid>
        </div>
    )
}

const Title = styled.h1(
    () => css`
        font-size: var(--text-lg);
        font-weight: var(--font-medium);
        color: var(--clr-gray-900);

        margin-bottom: 32px;
    `
)

export default ShoesPage
