# Install
npm i

# Run (both prod and dev environements)
npm start

#Features
-Webpack 3 & dev server
-Handlebars
-Sass
-ES6 support (Babel)
-Automatic resource output (statics are bundled only if requested)
-Parallel compilation (Styles & DOM doesn't need to be compiled each time one of both has changes)

#Proyect structure
-Dist: Build distribution folder, contains the whole process bundling result.
(a stand alone website that can be droped in any kind of http server and work properly)

-Components: Handlebars components implementing Atomic design design systems methodology.
(http://bradfrost.com/blog/post/atomic-web-design/) 

-Statics: Contains anything that shouldnt be edited from an IDE.

-Styles: Follows ITCss principles and its code follows BEM nomenclature.
(https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)

-Views: View for each page and files to be loaded specifically on certain pages.

-Scripts: App ES6 classes.
