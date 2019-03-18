Food Diary

To get started:

1. Clone the repo.  

2. Navigate into the foodDiaryApp directory.  Run npm install.  This will install the dependencies.  

3. Create a file called credentials.json and place it into the foodDiaryApp/model directory.  The file should look like this, with the appropriate fields filled in to your own specifications:

{ "db": 
  { 
    "host" : "localhost",
    "user" : "root",
    "password" : "YourPassword",
    "database" : "foodDiary"
  }
}

4. In the DataModel directory there are two sql files to get the app setup with some mock data.  First run the queries in db_structure_v2.sql.  This will set up the schema and tables.  Next run the inserts.sql file.  This will populate the tables with the appropriate data.   

You are all set up to develop the foodDiaryApp!



The source code can be found in the foodDiaryApp directory.  It is separated into three files: Model, View and Controller.

This project is based off of a prototype project previously built with a LAMP stack.  The prototype can be found here:  https://github.com/mattyplo/SlimPickins

#MySQL connection setup
See readme in model folder
