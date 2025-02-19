import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animation from "tailwindcss-animated";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        flip: "flip 6s infinite steps(2, end)",
        kitrotate: "kitrotate 3s linear infinite both",
        shine: "shine 2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shine: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        kitrotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "75%": {
            transform: "rotate(5deg)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      spacing: {
        3.5: "14px",
        13: "52px",
        15: "60px",
        18: "72px",
        22: "84px",
        25: "100px",
        26: "110px",
        38: "152px",
        46: "184px",
        50: "200px",
        65: "265px",
        76: "304px",
        88: "352px",
        92: "368px",
      },
      screens: {
        sm: "430px",
        md: "786px",
        lg: "1200px",
        xl: "1440px",
      },
      lineHeight: {
        header: "60px",
      },
      fontSize: {
        head: "14px",
        "1.5xl": "22px",
        "2.5xl": "28px",
        "3.5xl": "32px",
        "4.5xl": "40px",
        "5.5xl": "56px",
        "7.5xl": "84px",
      },
      fontFamily: {
        int: ["Inter Variable", ...fontFamily.sans],
        grot: ["Schibsted Grotesk Variable", ...fontFamily.serif],
        man: ["Manrope Variable"],
      },
      colors: {
        blue1: "#001A32",
        grey1: "#333333",
        black1: "#293238",
        white1: "#F5F5F5",
        red1: "#FF5555",
        yellow1: "#B5A57D",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [forms, animation, typography],
} satisfies Config;
