'use client';
import React, { useContext } from 'react'
import { HeroImg } from '@/util/image';
import Image from 'next/image';
import { ColorModeContext, tokens } from '@/theme';
import { useTheme, useMediaQuery, Button } from "@mui/material";
import HeroButtonIcon from '../../assets/icons/heroButtonIcon';
const Hero = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(768));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between(768, 1300));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up(1300));

  return (
    <div className='hero-container'>
      <Image
        src={HeroImg}
        alt="Logo"
        width={547}
        className='hero-img'
      />

      <div className='deal-container'>
        <div>
          <p >
            Summer Essentials
          </p>
          <p>
            20% off
          </p>
        </div>
        <div>
          <p>
            19 Jul-30 Jul
          </p>
        </div>

      </div>

      <div className="hero-text-container">
        <h3>
          Kimonos, Caftans & Pareos
        </h3>
        <p>
          Poolside glam included From $4.99
        </p>

        <Button variant="contained" startIcon={<HeroButtonIcon />} className='hero-icon-button'>
          SHOP NOW
        </Button>
      </div>
    </div>
  )
}

export default Hero