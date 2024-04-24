import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    publicDir: "src/assets/static",
    server: {
        port: 8000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@app": path.resolve(__dirname, "./src/app"),
            "@entities": path.resolve(__dirname, "./src/entities"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@widgets": path.resolve(__dirname, "./src/widgets"),
        },
    },
    css: {
        modules: {
            generateScopedName: (name, filename, css) => {
                var line = css.split("." + name)[0].split(/[\r\n]/).length;
                var file = path.basename(filename, ".css");

                return "_" + file + "_" + line + "_" + name;
            },
            localsConvention: "camelCaseOnly",
        },
    },
});
