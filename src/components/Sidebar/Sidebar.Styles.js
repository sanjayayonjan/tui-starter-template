import Styled from "@emotion/styled"
import {
    MdDashboard,
    MdWebAsset,
    MdContentCopy
} from 'react-icons/md'

export const SidebarBlock = Styled.div`
width: 280px;
height: 100vh;
`

export const Nav = Styled.nav`
    cursor: pointer;

    &:hover {
        background-color: #274775;
    }
`

export const DashboardIcon = Styled(MdDashboard)`
  margin-right: .6rem;
`

export const TableIcon = Styled(MdWebAsset)`
  margin-right: .6rem;
`

export const FormIcon = Styled(MdContentCopy)`
  margin-right: .6rem;
`