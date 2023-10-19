"use client";
import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

export interface Tokens {
    primary: {
        [key: number]: string;
    };
    secondary: {
        [key: number]: string;
    };
    footer: {
        [key: number]: string;
    };
    base: {
        [key: number]: string;
    };
}

// color design tokens export
export const tokens = (mode: PaletteMode): Tokens => ({
    ...(mode === "dark"
        ? {
            primary: {
                50: "#E4F2FF",
                100: "#BFDDFF",
                200: "#96C9FF",
                300: "#6EB3FF",
                400: "#55A2FF",
                500: "#4592FF",
                600: "#4484F0",
                700: "#4172DC",
                800: "#3E60C9",
                900: "#3840A9",
            },
            secondary: {
                50: "#E5F7EC",
                100: "#C0EAD1",
                200: "#97DCB3",
                300: "#68CF95",
                400: "#3DC47E",
                500: "#00B967",
                600: "#00A95D",
                700: "#009750",
                800: "#008644",
                900: "#00662F",
            },
            footer: {
                50: "#EAF3FB",
                100: "#D1E2EB",
                200: "#B8CEDA",
                300: "#9DB8C9",
                400: "#88A7B9",
                500: "#7296AB",
                600: "#658699",
                700: "#557181",
                800: "#465D6B",
                900: "#344752",
            },
            base: {
                0: "#FFFFFF",
                50: "#F5F5F5",
                100: "#E9E9E9",
                200: "#D9D9D9",
                300: "#C4C4C4",
                400: "#9D9D9D",
                500: "#7B7B7B",
                600: "#555555",
                700: "#434343",
                800: "#262626",
                900: "#000000",
            },
            selected: {
                100: "#FF7A00"
            },
            notification: {
                100: "#FF7A00"
            },
        }
        : {
            primary: {
                50: "#3840A9",
                100: "#3E60C9",
                200: "#4172DC",
                300: "#4484F0",
                400: "#4592FF",
                500: "#55A2FF",
                600: "#6EB3FF",
                700: "#96C9FF",
                800: "#BFDDFF",
                900: "#E4F2FF",
            },
            secondary: {
                50: "#00662F",
                100: "#008644",
                200: "#009750",
                300: "#00A95D",
                400: "#00B967",
                500: "#3DC47E",
                600: "#68CF95",
                700: "#97DCB3",
                800: "#C0EAD1",
                900: "#E5F7EC",
            },
            footer: {
                50: "#344752",
                100: "#465D6B",
                200: "#557181",
                300: "#658699",
                400: "#7296AB",
                500: "#88A7B9",
                600: "#9DB8C9",
                700: "#B8CEDA",
                800: "#D1E2EB",
                900: "#EAF3FB",
            },
            base: {
                0: "#FFFFFF",
                50: "#F5F5F5",
                100: "#E9E9E9",
                200: "#D9D9D9",
                300: "#C4C4C4",
                400: "#9D9D9D",
                500: "#7B7B7B",
                600: "#555555",
                700: "#434343",
                800: "#262626",
                900: "#000000",
            },
            selected: {
                100: "#FF7A00"
            },
            notification: {
                100: "#FF7A00"
            }
        }),
});

// mui theme settings
export const themeSettings = (mode: PaletteMode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.footer[700],
                        main: colors.footer[500],
                        light: colors.footer[100],
                    },
                    background: {
                        default: colors.base[800],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.secondary[500],
                    },
                    neutral: {
                        dark: colors.footer[700],
                        main: colors.footer[500],
                        light: colors.footer[100],
                    },
                    background: {
                        default: colors.base[50],
                    },
                }),
        },
    };
};

// context for color mode

export interface ColorModeContextType {
    toggleColorMode: () => void;
}


export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => { },
});

export const useMode = (): [theme: any, colorMode: ColorModeContextType] => {
    const [mode, setMode] = useState<PaletteMode>("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};