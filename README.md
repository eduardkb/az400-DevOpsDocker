# JS-TutorCrudApp-React-Node-Express-MySQL

## How to Run
	Express runs backend and also seves the frontend end build folder from the aReactFrontend/build folder
	- $ npm install			# install backend dependencies
	- $ cd aReactFrontend
	- $ npm install			# install frontend dependencies
	- $ npm run build		# make frontend build
	- $ cd ..
	- $ node server.js		# run backend server (which runs also FE static index.js) see server.js.

## Project tutorial at:
    - https://www.bezkoder.com/react-node-express-mysql/

## Backend API's 
    Methods	    Urls	                    Actions
    GET	        api/tutorials	            get all Tutorials
    GET	        api/tutorials/:id	        get Tutorial by id
    POST	    api/tutorials	            add new Tutorial
    PUT	        api/tutorials/:id	        update Tutorial by id
    DELETE	    api/tutorials/:id	        remove Tutorial by id
    DELETE	    api/tutorials	            remove all Tutorials
    GET	        api/tutorials?title=[kw]	find all Tutorials which title contains 'kw'

## Starting Node App
    - npm init

## Backend Dependencies
    - npm install express sequelize mysql2 cors --save
	
## Frontend Dependencies
	-  npm install bootstrap axios