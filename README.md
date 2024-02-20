JohnDoe Free Bootstrap landing page for personal and commercial use. Designed with ♥️ and creativity by Devcrud.com 

Product Page: https://wwww.devcrud.com/

Credits:

    Demo Images:
        Unsplash:       	(https://www.unsplash.com)

    Icons:
		Themify Icons: 		(https://themify.me/themify-icons)

	Other:
		JQuery: 			(https://www.jquery.com)
		Bootstrap: 			(https://www.getbootstrap.com)
		Bootstrap Affix: 	(http://getbootstrap.com/javascript/#affix)  
		Isotope: 			(https://isotope.metafizzy.co/) 
		Google Maps:		(https://maps.google.com)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list