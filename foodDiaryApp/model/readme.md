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
