'use client';
import React, { useContext } from 'react'
import { Box, IconButton, useTheme, Divider, useMediaQuery, Stack } from "@mui/material";
import { ColorModeContext, tokens } from '@/theme';
import CategoriesIcon from '../../assets/icons/categories';
import NextLink from 'next/link';
import Image from "next/image";
import { MenCosmetic } from '@/util/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CartIcon from '@/assets/icons/cart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { color } from 'framer-motion';

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between(768, 1300));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up(1300));

    const categories = [
        {
            id: 1,
            title: 'Women'
        },
        {
            id: 2,
            title: 'Men'
        },
        {
            id: 3,
            title: 'Children'
        },
        {
            id: 4,
            title: 'Home & Furniture'
        },
        {
            id: 5,
            title: 'Cosmetics'
        },
        {
            id: 6,
            title: 'Shoe & Bag'
        },
        {
            id: 7,
            title: 'Electronics'
        },
        {
            id: 8,
            title: 'Sports and Outdoor'
        },
        {
            id: 9,
            title: 'Bet Seller'
        },


    ]

    return (
        <Stack direction={'column'} display={'flex'} flex={'1'}>
            <div className='home-header' style={isLargeScreen ? { padding: '8px 80px' } : isMediumScreen ? { padding: '8px 90px' } : isSmallScreen ? { display: 'none' } : {}}>
                <Stack direction="row" alignItems={'center'} marginRight={'50px'} style={{ cursor: 'pointer' }}>
                    <CategoriesIcon color={colors.base[0]}/>
                    <p className='categories-text'>Categories</p>
                </Stack>

                <ul className='header-links-left' style={{ fontSize: "12px" }}>
                    <li><NextLink href="#">USD</NextLink>
                        <ExpandMoreIcon className='expand-icon' />
                        <ul className="submenu" id="submenu1" style={theme.palette.mode === "dark" ? { backgroundColor: '#262626' } : { backgroundColor: '#F5F5F5' }}>
                            <li>NAIRA</li>
                            <li>AED</li>
                            <li>EURO</li>
                            <li>ZAF</li>
                        </ul>
                    </li>
                    <li><NextLink href="#">English</NextLink>
                        <ExpandMoreIcon className='expand-icon' />
                        <ul className="submenu" id="submenu2" style={theme.palette.mode === "dark" ? { backgroundColor: '#262626' } : { backgroundColor: '#F5F5F5' }}>
                            <li>Spanish</li>
                            <li>French</li>
                            <li>Yoruba</li>
                            <li>Igbo</li>
                        </ul>
                    </li>
                </ul>
                <div className='header-links-centre' style={isMediumScreen ? { display: 'none' } : {}}>
                    <Divider orientation="vertical" flexItem sx={{ marginInline: 'auto' }} />
                    <Image height={63} width={63} src={MenCosmetic} alt="logo"></Image>
                    <div className='header-text-container'>
                        <p>Weekly Men's Toiletries Coupons.</p>
                        <p>We extend exclusive discounts to our male clientele</p>
                    </div>
                    <Divider orientation="vertical" flexItem sx={{ marginInline: 'auto' }} />
                </div>
                <ul className='header-links-right' style={{ fontSize: "14px" }}>
                    <NextLink href={'#'}>
                        <li>
                            <PermIdentityIcon />
                            <p style={{marginLeft:'5px'}}>Sign in</p>
                        </li>
                    </NextLink>

                    <li>
                        <FavoriteBorderIcon />
                        <p style={{marginLeft:'5px'}}>Favorites</p>
                    </li>
                    <li>
                        <CartIcon color={'white'}/>
                        <p style={{marginLeft:'5px'}}>Cart</p>
                    </li>
                </ul>
            </div>
            <div className='home-sub-header' style={isLargeScreen ? { padding: '16px 80px' } : isMediumScreen ? { padding: '16px 90px' } : isSmallScreen ? { display: 'none' } : {}}>
                <ul className='sub-header-container'>
                    {categories.map((item, id) => (
                        <li key={id}>
                            <NextLink href={item.title}>{item.title}</NextLink>
                        </li>
                    ))}
                </ul>
            </div>
        </Stack>

    )
}

export default Header