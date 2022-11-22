import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        plugins: [terser()] // This will minify the code
    },
    plugins: [
        typescript({
            compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" }, // This will override the configs in tsconfig.json
            exclude: ["**/__tests__", "**/*.test.ts", "**/*.test.tsx"] //Ignore the tests
        }),
        postcss({ modules: true }),
    ],
    external: ['react'], // Will suppress this external dependency warning
};