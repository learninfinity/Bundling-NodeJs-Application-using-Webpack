
--------------------------------------------------------------------------
|                Bundling NodeJs Application using Webpack               |
--------------------------------------------------------------------------

Step 1 : Install nodejs in your system / Make workspace directory / Run following command 

			mkdir webpack_demo
			cd  webpack_demo
			npm init --yes
			
Step 2 : Install required packages using NPM ( This package is DEV dependency)
			
			npm i -D webpack webpack-cli
			
Step 3 : Create "src" folder inside of our application and run following command

Step 4 : Run following command to generate bundling file from our source code

			webpack
		
Step 5 : Add build command on script section in package.json file
		
			"build": "webpack",
			
Step 6 : Add bundling mode in script section area

			-d (or) --mode development // It wont minify the script
			-p (or) --mode production  // It will minify the script
			
			
Step 7 : Add "webpack.config.js" file for configuration
			
			entry  -> Entry point for webpack src file
			output -> It help us to configure output files
			mode   -> bundling mode like dev or production
			
Step 8 : Bundling & Copy HTML file to dist folder

			npm i -D html-webpack-plugin html-loader
			
Step 9 : webpack-dev-server configuration for development

			npm i -D webpack-dev-server
			
Step 10 : Bundling & Copy JS file to dist folder using babel loader

			npm i -D @babel/core babel-loader @babel/preset-env

Step 11 : Bundling & Copy Image file to dist folder
			
			npm i -D file-loader

Step 12 : Bundling & Copy SCSS file to dist folder
			
			npm i -D node-sass style-loader css-loader sass-loader

Step 13 : Include compiled SCSS as CSS file into index HTML file

			npm i -D mini-css-extract-plugin
			
Step 14 : Clening old file in dist folder
			
			npm install --D clean-webpack-plugin
			
Step 14 : Run the application and check the result
