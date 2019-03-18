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
INSERT INTO Users (FirstName, LastName, UserName, Password)
	VALUES ('Calvin', 'Lau', 'CLau', 'Password1');
INSERT INTO Users (FirstName, LastName, UserName, Password)
	VALUES ('Yan', 'Soo', 'Yoo', 'Password2');
INSERT INTO Users (FirstName, LastName, UserName, Password)
	VALUES ('Curren', 'Power', 'CPower', 'Password3');
INSERT INTO Users (FirstName, LastName, UserName, Password)
	VALUES ('Matteo', 'Paice', 'MPaice', 'Password4');
INSERT INTO Users (FirstName, LastName, UserName, Password)
	VALUES ('SoJeong', 'Lee' , 'SLee', 'Password5');
INSERT INTO Users (FirstName, LastName, UserName, Password)
	VALUES ('Bob', 'Builder', 'BBuilder', 'Password6');
    
    
    
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
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Brocoli', 3.5, 88);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Eggs', 3.2 , 55);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Tacos', 4.1, 120);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Guacamole', 5.3, 75);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Ribs', 5.3, 200);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Potatoes', 3.9, 110);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Kale', 3.3, 77);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Hamburgers', 4.9, 105);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Stir Fry', 3.3, 95);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Pasta', 3.6, 88); 
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Coke', 6.6, 55);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Spinach', 4.4, 66);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Ice Cream', 5.7, 74);
INSERT INTO Foods (FoodName, CaloriesPerGram, GramsPerServing)
	VALUES ('Enchiladas', 4.3, 105);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Kashi Granola Cocoa Beach Cereal', 55, 4.09);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Apple' , 242, .54);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Banana' , 126, .87);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Grapes' , 126, .71);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Strawberries' , 147, .34);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Halibut' , 84, 1.43);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Salmon Chinook' , 84, 2.38);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Shrimp' , 84, 1.19);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Honey Nut Cheerios' , 28, 3.75);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Plain Oatmeal' , 234, .68);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Cheetos' , 57, 5.44);
INSERT INTO Foods (FoodName, GramsPerServing, CaloriesPerGram)
	VALUES ('Austin PB & J Sandwich' , 39, 4.84);



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
INSERT INTO Meals(MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 6);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 7);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 8);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 9);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 10);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 11);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 2, 6);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 2, 7);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 2, 8);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 3, 9);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 3, 11);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 3, 6);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 4, 9);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 4, 11);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-21', 1, 9);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 1, 11);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 2, 6);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 2, 10);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 3, 8);
INSERT INTO Meals (MealDate, MealTypeId, UserId)
	VALUES ('2019-02-20', 4, 9);
    
    
    
    
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
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed) 
	VALUES (19, 15, 200);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (20,  16, 250);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (21,  17, 300);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (22, 18, 250);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (23,  19, 500);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (23, 20, 300);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (23,  22, 200);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (24,  22, 500);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (24,  23, 300);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (25,  24, 400);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (25,  26, 300);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (26,  18, 234);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (26,  17, 499);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (26,  21, 900);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (27,  16, 200);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (27,  19, 400);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (28,  20, 300);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (29,  22,  500);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (30,  23, 600);
INSERT INTO MealsFoods (MealID, FoodID, GramsConsumed)
	VALUES (30,  24, 300);
    
    
select * from users;
