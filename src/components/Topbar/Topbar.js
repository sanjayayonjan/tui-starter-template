/** @jsxRuntime classic */
/**  @jsx jsx */
import React from 'react'
import { Flex, IconButton, jsx } from "theme-ui"
import { MdMenu as MenuIcon } from "react-icons/md"


function Topbar() {
    return (
        <>
            <Flex sx={{
                width: "100%",
                boxShadow: "0px 3px 6px #0000001A",
                padding: "0 1rem",
                height: "4rem",
                alignItems: "center",
                bg: "white",
                }}
            >
                <IconButton>
                    <MenuIcon sx={{ fontSize: '16px' }} />
                </IconButton>
                <Flex></Flex>
            </Flex>
        </>
    )
}

export default Topbar
