use foodDiary;

/********************* Users **************************/
INSERT INTO Users (FirstName, LastName, UserName, Password) 
	VALUES ('David', 'Rossman', 'DRossman', 'password');
INSERT INTO Users (FirstName, LastName, UserName, Password) 
	VALUES ('Carlos', 'Anterra', 'CAnterra', 'password');
INSERT INTO Users (FirstName, LastName, UserName, Password) 
	VALUES ('Lacey', 'Cambert', 'LCambert', 'password');
INSERT INTO Users (FirstName, LastName, UserName, Password) 
	VALUES ('Tanya', 'Tinkleton', 'TTinkleton', 'password');
INSERT INTO Users (FirstName, LastName, UserName, Password) 
	VALUES ('Brandido', 'Branson', 'DoubleB', 'password');

/********************* MealTypes **************************/
INSERT INTO MealTypes (MealTypeID, MealType) 
	VALUES (1, 'Breakfast');
INSERT INTO MealTypes (MealTypeID, MealType) 
	VALUES (2, 'Lunch');
INSERT INTO MealTypes (MealTypeID, MealType) 
	VALUES (3, 'Dinner');
INSERT INTO MealTypes (MealTypeID, MealType) 
	VALUES (4, 'Snack');

/********************* Foods **************************/
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Brocoli', 3.5, 88);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Eggs', 3.2 , 55);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Tacos', 4.1, 120);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Guacamole', 5.3, 75);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Ribs', 5.3, 200);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Potatoes', 3.9, 110);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Kale', 3.3, 77);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Hamburgers', 4.9, 105);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Stir Fry', 3.3, 95);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Pasta', 3.6, 88); 
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Coke', 6.6, 55);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Spinach', 4.4, 66);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Ice Cream', 5.7, 74);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Enchiladas', 4.3, 105);
    
/********************* Meals **************************/    
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-01', 1, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-01', 2, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-01', 3, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-01', 4, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-02', 2, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-02', 3, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-07', 1, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-07', 3, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-10', 1, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-10', 2, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-10', 3, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-10', 4, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-12', 2, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-12', 4, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-13', 1, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-13', 2, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-13', 3, 1);
INSERT INTO Meals (MealDate, MealTypeID, UserID)
	VALUES ( '2019-03-13', 4, 1);
    
/********************* MealsFoods **************************/        
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 1, 1, 45);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 2, 3, 65);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 2, 5, 33);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 3, 6, 22);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 4, 2, 65);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 5, 11, 43);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 5, 12, 32);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 6, 14, 31);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 7, 13, 77);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 8, 12, 33);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 9, 1, 21);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 9, 3, 45);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 10, 2, 88);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 11, 8, 65);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 12, 6, 44);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 12, 11, 98);
 INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 12, 13, 22);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 13, 9, 43);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 14, 5, 71);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 15, 7, 11);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 16, 4, 28);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 17, 8, 74);    
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 18, 3, 45);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES ( 18, 12, 29);
    
    
    
SELECT * FROM MealsFoods;    
SELECT * FROM Meals;    
SELECT * FROM Foods;
SELECT * FROM MealTypes;
SELECT * FROM Users;
