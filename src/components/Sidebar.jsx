import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { NavLink } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'

const AppSidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    // const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
    // const toggle = () => setIsOpen(!isOpen)

    // const logoutWithRedirect = () =>
    //     logout({
    //         logoutParams: {
    //             returnTo: window.location.origin,
    //         },
    //     })

    return (
        <Sidebar>
            <img
                src="logo.svg"
                style={{ marginBottom: '24px', marginTop: '16px' }}
            />
            <Menu
                menuItemStyles={{
                    button: {
                        [`&.active`]: {
                            backgroundColor: '#2B2C28',
                            color: '#FFFAFB',
                        },
                    },
                }}
            >
                <MenuItem component={<NavLink to="/" />}>Dashboard</MenuItem>
                <MenuItem component={<NavLink to="/onboard" />}>
                    Onboard
                </MenuItem>
                <MenuItem component={<NavLink to="/fire" />}>
                    Retire Early
                </MenuItem>
                <MenuItem component={<NavLink to="/leaderboard" />}>
                    Leaderboard
                </MenuItem>
                <MenuItem component={<NavLink to="/profile" />}>
                    Profile
                </MenuItem>
                {/* <MenuItem
                    component={
                        <Link
                            to="#"
                            id="qsLogoutBtn"
                            onClick={() => logoutWithRedirect()}
                        ></Link>
                    }
                >
                    Log out
                </MenuItem> */}
            </Menu>
        </Sidebar>
    )
}

export default AppSidebar
