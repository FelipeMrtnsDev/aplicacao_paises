import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-bottom: 32px;
    }

`

export const UlContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
`

export const Card = styled.li`
    border: 1px solid black;
    cursor: pointer;
    list-style-type: none;
    padding: 16px;
`

export const LinkCountry = styled(Link)`
    text-decoration: none;
    color: black;
`