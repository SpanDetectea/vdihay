import { useState, useEffect } from 'react';

const SCREEN_SM = 375;
const SCREEN_MD = 425;
const SCREEN_LG = 768;
const SCREEN_XL = 870;
const SCREEN_XXL = 1024;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width <= SCREEN_SM,
    isScreenMd: width <= SCREEN_MD,
    isScreenLg: width <= SCREEN_LG,
    isScreenXl: width <= SCREEN_XL,
    isScreenXxl: width <= SCREEN_XXL,
  };
};