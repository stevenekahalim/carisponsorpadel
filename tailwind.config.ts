import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#00E67A',
          hover: '#00CC6E',
          light: 'rgba(0, 230, 122, 0.1)',
        },
        // Secondary Colors
        secondary: {
          blue: '#0066FF',
          'blue-hover': '#0052CC',
        },
        // Neutrals
        bg: {
          gray: {
            50: '#F8F9FA',
            100: '#F3F4F6',
          }
        },
        border: {
          gray: '#E5E7EB',
        },
        text: {
          gray: '#6B7280',
          dark: '#111827',
        },
        // Status Colors
        status: {
          available: '#00E67A',
          partial: '#F59E0B',
          full: '#6B7280',
        },
      },
      // Typography Scale
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '1'],
        '6xl': ['60px', '1'],
      },
      // Font Weights
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      // Spacing System (8px base)
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
      },
      // Container Widths
      maxWidth: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      // Shadow Scale
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.12)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
        'green': '0 4px 12px rgba(0, 230, 122, 0.25)',
        'green-lg': '0 8px 20px rgba(0, 230, 122, 0.35)',
      },
      // Border Radius
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
      },
      // Transitions
      transitionDuration: {
        '200': '0.2s',
        '300': '0.3s',
        '500': '0.5s',
        '600': '0.6s',
      },
      // Backdrop Blur
      backdropBlur: {
        'md': '20px',
      },
    },
  },
  plugins: [],
};
export default config;
