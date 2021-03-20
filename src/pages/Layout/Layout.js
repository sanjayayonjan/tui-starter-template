import React from 'react'
import { Topbar } from '../../components'
import Styled from "@emotion/styled"

export const MainContent = Styled.div`
    padding-left: 280px;
`

export const ContentWrapper = Styled.div`
    padding: 1.4rem;
`

function Layout() {
    return (
        <>
            <MainContent>
                <Topbar />
                <ContentWrapper>
                    <h2>Overview</h2>
                    <p>View a summary of your account navigate to the most important account activities.</p>
                </ContentWrapper>
            </MainContent>
        </>
    )
}

export default Layout
