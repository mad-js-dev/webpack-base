# Install
npm i

# Run (both prod and dev environements)
npm start

#Remarks
Dist: folder is the standalone built app, just opening the index file on the browser should work.(once you've done 'npm start' for the first time).
Statics: contains anything that shouldnt be edited from an IDE.
Styles: follow ITCss principles and its code follows BEM nomenclature.
Views: container the only page this proyect has.
Scripts: app classes

#More time
-Setting components variables properly: all variables that could be changed by design requirements should be set as variable instead of fix value.(45min-1h)
-Create a set of standard font setting for the differents texto of the app.(30min)
-Create a set of standard spacings for the differents components.(45min)

#Next steps
-Adding template system: could be Handlebars or Twig with webpack-twig-loader(possibly, need investigation).
-Making webpack build properly images. All image folder is currently coppies to dis, its should copy only the pictures in use
-Animation! Set some kind of standart for microinteractions on IT Layers.

#Timings
Structure refining: 30min
Logic analisys: 30min
Layout: 4.30h
Logic: 3.30h
Total: 9h

#Conclusions
Building UI with css architecture concepts implies expending some more time in planning before coding and more time even on coding than traditional css would need, I consider 3-4 hours is barely enought just for coding the UI without logic with any kind of css architecture. There is also a considerable amount of time that is often needed in order to maintain webpack's ecosystem too.