import type { Config } from "tailwindcss"

const config = {
    darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Indian Aesthetic Colors
                saffron: {
                    DEFAULT: "#FF9933",
                    50: "#FFF5E6",
                    100: "#FFEBC2",
                    200: "#FFD685",
                    300: "#FFC247",
                    400: "#FFAD1F",
                    500: "#FF9933", // Base
                    600: "#E67E00",
                    700: "#B36200",
                    800: "#804600",
                    900: "#4D2A00",
                },
                indiaGreen: {
                    DEFAULT: "#138808",
                    50: "#E8F5E9",
                    100: "#C8E6C9",
                    200: "#A5D6A7",
                    300: "#81C784",
                    400: "#66BB6A",
                    500: "#138808", // Base
                    600: "#0E6B06",
                    700: "#0A4E04",
                    800: "#063002",
                    900: "#031701",
                },
                navyBlue: {
                    DEFAULT: "#000080",
                    50: "#E6E6FF",
                    100: "#C2C2FF",
                    200: "#8585FF",
                    300: "#4747FF",
                    400: "#1F1FFF",
                    500: "#000080", // Base
                    600: "#000066",
                    700: "#00004D",
                    800: "#000033",
                    900: "#00001A",
                },
                terracotta: "#E07A5F",
                sunsetOrange: "#F4A261",
                peacockBlue: "#2A9D8F",
                gold: "#FFD700",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
                serif: ["var(--font-serif)", "serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
