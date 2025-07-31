import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Désactive la règle des attributs alt manquants
      "jsx-a11y/alt-text": "off",
      
      // Autres règles personnalisées
      "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
    },
    // Ignorer les fichiers spécifiques (optionnel)
    ignores: ["**/*.image.test.js"]
  }
];