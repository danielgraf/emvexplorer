# emvexplorer
An electron desktop app to read EMV card data

This app requires two compiled Java JAR files in the app/java folder :

emvExplorerEngine.jar

javaemvreader-0.6.1-SNAPSHOT.jar

If you want to build them, you'll find the repositories under my profile.

If you want the JARs as binaries you can just download them from https://github.com/danielgraf/emvExplorerEngine/releases/tag/v1.0.0 and https://github.com/danielgraf/javaemvreader/releases/tag/1.0.0 

To build this electron app :

npm install

npm install java

npm install --save-dev electron-rebuild

./node_modules/.bin/electron-rebuild

npm-start

To package it as a .app file (and you can download a prepackaged one from here : https://github.com/danielgraf/emvexplorer/releases/tag/v1.0.0) :

electron-packager . EMVexplorer --platform=darwin -ignore=node_modules --arch=x64 --version=0.35.0 --overwrite

