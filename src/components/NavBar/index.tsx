'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Logo } from '@/util/image';
import Image from 'next/image';
import { Box, IconButton, useTheme, Typography, useMediaQuery } from "@mui/material";
import { ColorModeContext, tokens } from '@/theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import InstagramIcon from '../../assets/icons/instagram';
import FacebookIcon from '../../assets/icons/facebook';
import TelegramIcon from '../../assets/icons/telegram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartIcon from '@/assets/icons/cart';

// xs: 0,
// sm: 600, 640
// md: 900, 640
// lg: 1200, 1024
// xl: 1536, 1200


const NavBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between(768, 1300));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up(1300));
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);

    const isSubLinkActive = (subLinkPath: string) => {
        return pathname === subLinkPath
    };

    useEffect(() => { }, [pathname]);

    const menuItems =

        [
            {
                text: 'About Us',
                link: '/about',
            },
            {
                text: 'Blog',
                link: '/blog',
            },
            {
                text: 'Contact Us',
                link: '/contact',
            },
            {
                text: 'Help',
                link: '/help',
            }
        ];

    return (
        <nav className='app-navbar' style={isLargeScreen ? { padding: '28px 80px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' } : isMediumScreen ? { padding: '12px 90px', border: '1px solid red', flexDirection: 'column', } : isSmallScreen ? { padding: '32px 20px', flexDirection: 'column', border: '1px solid blue' } : {}}>

            {
                !isMobile && (
                    <>
                        <Box display="flex" flex={isMediumScreen ? '1' : ''} alignItems="center" justifyContent={isMediumScreen ? 'space-between' : ''}>
                            <Box display="flex" alignItems="center">
                                <NextLink href="/" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Image
                                        src={Logo}
                                        alt="Logo"
                                    />
                                    <Typography marginLeft="6px" className='app-name'>LexyStore</Typography>
                                </NextLink>
                            </Box>

                            <Paper
                                component="form"
                                sx={{ display: 'flex', alignItems: 'center', marginLeft: '28px' }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Products"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <Select
                                    // value={age}
                                    // onChange={handleChange}
                                    // displayEmpty
                                    defaultValue={'All Categories'}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    autoWidth={true}
                                >
                                    <MenuItem value={`Men's Cloth`}>Men&apos;s Cloth</MenuItem>
                                    <MenuItem value={`Women's Cloth`}>Women&apos;s Cloth</MenuItem>
                                    <MenuItem selected value={'All Categories'}>All Categories</MenuItem>
                                </Select>
                                <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Box>

                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} border={'1px solid blue'} justifyContent={'space-between'} flex={1}>
                            <div className="nav-items-container">
                                <ul className="nav-items">
                                    {menuItems.map((item, index) => (
                                        <NextLink
                                            key={index}
                                            href={item.link}>
                                            <li
                                                className={isSubLinkActive(item.link) ? 'active-nav-items-list' : 'nav-items-list'}>
                                                {item.text}
                                            </li>
                                        </NextLink>
                                    ))}
                                </ul>
                            </div>

                            <Box display="flex">
                                <IconButton >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton>
                                    <TelegramIcon />
                                </IconButton>
                                <IconButton onClick={colorMode.toggleColorMode}>
                                    {theme.palette.mode === "dark" ? (
                                        <DarkModeOutlinedIcon />
                                    ) : (
                                        <LightModeOutlinedIcon />
                                    )}
                                </IconButton>
                            </Box>
                        </Box>
                    </>
                )
            }

            {isMobile && (
                <>
                    <div className='app__navbar-menu'>
                        <IconButton onClick={() => setToggle(true)}>
                            <MenuIcon />
                        </IconButton>

                        <NextLink href="/" style={{ display: 'flex', flexDirection: 'row' }}>
                            <Image
                                src={Logo}
                                alt="Logo"
                            />
                            <Typography marginLeft="6px" className='app-name'>LexyStore</Typography>
                        </NextLink>

                        <IconButton>
                            <CartIcon />
                        </IconButton>
                    </div>

                    <Paper
                        component="form"
                        sx={{ display: 'flex', alignItems: 'center', mt: '20px' }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Products"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <Select
                            // value={age}
                            // onChange={handleChange}
                            // displayEmpty
                            defaultValue={'All Categories'}
                            inputProps={{ 'aria-label': 'Without label' }}
                            autoWidth={true}
                        >
                            <MenuItem value={`Men's Cloth`}>Men&apos;s Cloth</MenuItem>
                            <MenuItem value={`Women's Cloth`}>Women&apos;s Cloth</MenuItem>
                            <MenuItem selected value={'All Categories'}>All Categories</MenuItem>
                        </Select>
                        <Divider sx={{ height: 30, m: 0.5 }} orientation="vertical" />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>



                    {toggle && (
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                            className='menu'
                            style={theme.palette.mode === "dark" ? { backgroundColor: '#262626' } : { backgroundColor: '#F5F5F5' }}
                        >

                            <Box>
                                <IconButton onClick={() => setToggle(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>

                            <ul>
                                {menuItems.map((item, index) => (
                                    <NextLink
                                        key={index}
                                        href={item.link}
                                        onClick={() => setToggle(false)}>
                                        <li
                                            className={isSubLinkActive(item.link) ? 'active-navbar-mobile-link' : 'navbar-mobile-link'}>
                                            {item.text}
                                        </li>
                                    </NextLink>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </>
            )}

        </nav>
    )
}

export default NavBar