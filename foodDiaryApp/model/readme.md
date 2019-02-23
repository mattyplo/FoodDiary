# Initialized Database
To initialize the database. Log on to MySQL Workbench, open & run db_structure_v2.sql under DataModel folder.

# Establish Connection to MySQL server
Go to your foodDiaryApp directory in command line tool, type "npm install mysql".
After successful install, you want to install dependencies by "npm install".
Make a new file credentials.json under foodDiaryApp/model directory.
In the file:
{ "db": { 
    "host"     : "localhost",
    "user"     : <"yourUserName">,
    "password" : <"yourPassWord">
  }
}
Read readme.md under node_modules/mysql for more attributes you can setup for the connection.
Try "node db_connection.js".
If you get "Error: ER_NOT_SUPPORTED_AUTH_MODE"
Try to run:
" 
ALTER USER 'yourUserName'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPassWord';
flush PRIVILEGES;
"
in your Workbench and try again.

# Generate Mock Data
Make sure your schema is already created in Workbench.
Go to mockgen folder under model directory, use node command run mockgen1.js, then mockgen2.js and finally mockgen3.js sequentially. (There some Async problem that causes the insertion to violate FK constraints if put all in one file, sorry. -- Yun)

# Construct your own MySQL queries
<temprary>
You can construct your own query using the following format:
    > let <'yourConstantName'> = require('your/path/to/model/db_connection');
    > <'yourConstantName'>(<'yourSQLQuery'>)
I would add function so all queries (except new user registration and log in / log out) query from the view of the user later on. (Yun)