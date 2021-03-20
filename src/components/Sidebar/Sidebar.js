/** @jsxRuntime classic */
/** @jsx jsx */
import {
    jsx,
    Flex,
    Link,
    Box
} from 'theme-ui'
import React from 'react'
import { Styled as S } from 'theme-ui'
import { 
    SidebarBlock,
    DashboardIcon,
    TableIcon,
    FormIcon,
    Nav
} from './Sidebar.Styles'

function Sidebar() {
    return (
        <>
            <SidebarBlock sx={{ bg: 'primary', position: 'fixed' }}>
                <Flex sx={{ alignItems: 'center', p: '2', height: '110px' }}>
                    <S.h5 sx={{ m: '0', color: 'white' }}>Theme UI</S.h5>
                </Flex>
                <Box>
                    <Nav>
                        <Link sx={{ color: 'white', p: '2', display: 'flex', alignItems: 'center' }} to='/'><DashboardIcon sx={{ fontSize: '22px' }}></DashboardIcon>Dashboard</Link>
                    </Nav>
                    <Nav>
                        <Link sx={{ color: 'white', p: '2', display: 'flex', alignItems: 'center'}} to='/'><TableIcon sx={{ fontSize: '22px' }}></TableIcon>Tables</Link>
                    </Nav>
                    <Nav>
                        <Link sx={{ color: 'white', p: '2', display: 'flex', alignItems: 'center' }} to='/'><FormIcon sx={{ fontSize: '22px' }}></FormIcon>Forms</Link>
                    </Nav>
                </Box>
            </SidebarBlock>

        </>
    )
}

export default Sidebar