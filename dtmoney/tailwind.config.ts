import { table } from "console";
import { headers } from "next/headers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extende utilizando o tema padrão do Tailwind
      fontFamily: {
        // Adiciona a fonte Poppins ao tema
        sans: ["var(--font-poppins)"],
        mono: ["var(--font-poppins)"],
      },
      colors: {
        // Adiciona as cores do tema
        title: "var(--title)",
        text: "var(--text)",
        income: "var(--income)",
        outcome: "var(--outcome)",
        header: "var(--header)",
        "table-header": "var(--table-header)",
        "income-value": "var(--income-value)",
        button: "var(--button)",
      },
    },
  },
  plugins: [],
};
export default config;
