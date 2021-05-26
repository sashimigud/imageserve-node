# imageserve-node
serving images from mongodb, with GridFSstream, mongodb, node and express

# setup

this is supposed to work in tandem with the imageupload-node repo, and needs the same setup:

# start MongoDB
1. cmd with admin-rights: "net start MongoDB" (starts the service)
2. cmd with admin-rights: "mongod" (makes db listen to conenctions)
3. cmd with admin-rights: "mongo" (opens mongo shell)
4. in mongo-shell: "use YOUR-DB-NAME"

# Change connection-string 
change mongoURI to your db to look something like this: "mongodb://127.0.0.1:27017/yourDB"
this is located in config.js

# start backend
run "npx nodemon index.js"

open browser at "localhost:6349"
