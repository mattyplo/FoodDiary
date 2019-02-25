# Initialized Database
To initialize the database. Log on to MySQL Workbench, open & run db_structure_v2.sql under DataModel folder.

# Establish Connection to MySQL server
<p>Go to your foodDiaryApp directory in command line tool, type "npm install mysql".
After successful install, you want to install dependencies by "npm install".</p>
<p>Make a new file credentials.json under foodDiaryApp/model directory.</p>
In the file:
{ "db": { <br>
    "host"     : "localhost",<br>
    "user"     : <"yourUserName">,<br>
    "password" : <"yourPassWord"><br>
  }<br>
}<br>
<p>Read readme.md under node_modules/mysql for more attributes you can setup for the connection.
Try "node db_connection.js".</p>
<p>If you get "Error: ER_NOT_SUPPORTED_AUTH_MODE"</p>
Try to run:<br>
" <br>
ALTER USER 'yourUserName'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPassWord';<br>
flush PRIVILEGES;<br>
"<br>
<p>in your Workbench and try again.</p>

# Generate Mock Data
<p>Make sure your schema is already created in Workbench.</p>
<p>Go to mockgen folder under model directory, use node command run mockgen1.js, then mockgen2.js and finally mockgen3.js sequentially. (There some Async problem that causes the insertion to violate FK constraints if put all in one file, sorry. -- Yun)</p>

# Construct your own MySQL queries
<h3>[temprary]</h3>
You can construct your own query using the following format:<br>
    > let <'yourConstantName'> = require('your/path/to/model/db_connection');<br>
    > <'yourConstantName'>(<'yourSQLQuery'>, yourCallBackfunction(error, row))<br>
    > I made an example field under the model directory name example, please check it out.
<p>I would add function so all queries (except new user registration and log in / log out) query from the view of the user later on. (Yun)</p>