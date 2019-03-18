INSERT INTO MealTypes ( MealTypeID, MealType)
VALUES (
1, "Breakfast"
);
INSERT INTO MealTypes
VALUES (
2, "Lunch"
);
INSERT INTO MealTypes
VALUES (
3, "Dinner"
);
INSERT INTO MealTypes
VALUES (
4, "Snack"
);


INSERT INTO Foods
(FoodID, FoodName, GramsPerServing, CaloriesPerGram)
VALUES (
1, 'Kashi Granola Cocoa Beach Cereal', 55, 4.09
);

INSERT INTO Foods
VALUES (
2, ' Apple' , 242, .54
);

INSERT INTO Foods
VALUES (
3, ' Banana' , 126, .87
);

INSERT INTO Foods
VALUES (
4, ' Grapes' , 126, .71
);

INSERT INTO Foods
VALUES (
5, ' Strawberries' , 147, .34
);

INSERT INTO Foods
VALUES (
6, ' Halibut' , 84, 1.43
);

INSERT INTO Foods
VALUES (
7, ' Salmon Chinook' , 84, 2.38
);

INSERT INTO Foods
VALUES (
8, ' Shrimp' , 84, 1.19
);

INSERT INTO Foods
VALUES (
9, ' Honey Nut Cheerios' , 28, 3.75
);

INSERT INTO Foods
VALUES (
10, ' Plain Oatmeal' , 234, .68
);

INSERT INTO Foods
VALUES (
11, ' Cheetos' , 57, 5.44
);

INSERT INTO Foods
VALUES (
12, ' Austin PB & J Sandwich' , 39, 4.84
);


INSERT INTO Users 
(UserID, FirstName, LastName, UserName, Password)
VALUES (
1, 'Calvin', 'Lau', 'CLau', 'Password1'
);
INSERT INTO Users 
VALUES (
2, 'Yan', 'Soo', 'Yoo', 'Password2'
);

INSERT INTO Users 
VALUES (
3, 'Curren', 'Power', 'CPower', 'Password3'
);

INSERT INTO Users 
VALUES (
4, 'Matteo', 'Paice', 'MPaice', 'Password4'
);

INSERT INTO Users 
VALUES (
5, 'SoJeong', 'Lee' , 'SLee', 'Password5'
);

INSERT INTO Users 
VALUES (
6, 'Bob', 'Builder', 'BBuilder', 'Password6'
);

INSERT INTO Meals
(MealID, MealDate, MealTypeId, UserId)
VALUES (
1, '2019-02-20', 1, 1
);
INSERT INTO Meals
VALUES (
2, '2019-02-20', 1, 2
);

INSERT INTO Meals
VALUES (
3, '2019-02-20', 1, 3
);

INSERT INTO Meals
VALUES (
4, '2019-02-20', 1, 4
);

INSERT INTO Meals
VALUES (
5, '2019-02-20', 1, 5
);

INSERT INTO Meals
VALUES (
6, '2019-02-20', 1, 6
);

INSERT INTO Meals
VALUES (
7, '2019-02-20', 2, 1
);

INSERT INTO Meals
VALUES (
8, '2019-02-20', 2, 2
);
INSERT INTO Meals
VALUES (
9, '2019-02-20', 2, 3
);

INSERT INTO Meals
VALUES (
10, '2019-02-20', 3, 4
);

INSERT INTO Meals
VALUES (
11, '2019-02-20', 3, 6
);

INSERT INTO Meals
VALUES (
12, '2019-02-20', 3, 1
);
INSERT INTO Meals
VALUES (
13, '2019-02-20', 4, 4
);
INSERT INTO Meals
VALUES (
14, '2019-02-20', 4, 6
);

INSERT INTO Meals
VALUES (
15, '2019-02-21', 1, 4
);

INSERT INTO Meals
VALUES (
16, '2019-02-20', 1, 6
);

INSERT INTO Meals
VALUES (
17, '2019-02-20', 2, 1
);

INSERT INTO Meals
VALUES (
18, '2019-02-20', 2, 5
);

INSERT INTO Meals
VALUES (
19, '2019-02-20', 3, 3
);

INSERT INTO Meals
VALUES (
20, '2019-02-20', 4, 4
);



INSERT INTO MealsFoods 
(MealsFoodsID, MealID, FoodID, GramsConsumed) 
VALUES (
1, 1, 1, 200
);

INSERT INTO MealsFoods 
(MealsFoodsID, MealID, FoodID, GramsConsumed) 
VALUES (
2, 2,  2, 250
);

INSERT INTO MealsFoods 
VALUES (
3, 3,  3, 300
);

INSERT INTO MealsFoods 
VALUES (
4, 4, 4, 250
);

INSERT INTO MealsFoods 
VALUES (
5, 5,  5, 500
);

INSERT INTO MealsFoods 
VALUES (
6, 5, 6 , 300
);

INSERT INTO MealsFoods 
VALUES (
7, 5,  8, 200
);

INSERT INTO MealsFoods 
VALUES (
8, 6,  8, 500
);

INSERT INTO MealsFoods 
VALUES (
9, 6,  9, 300
);

INSERT INTO MealsFoods 
VALUES (
10, 7,  10, 400
);

INSERT INTO MealsFoods 
VALUES (
11, 7,  12, 300
);

INSERT INTO MealsFoods 
VALUES (
12, 8,  4, 234
);

INSERT INTO MealsFoods 
VALUES (
13, 8,  3, 499
);


INSERT INTO MealsFoods 
VALUES (
14, 8,  7, 900
);

INSERT INTO MealsFoods 
VALUES (
15, 9,  2, 200
);

INSERT INTO MealsFoods 
VALUES (
16, 9,  5, 400
);

INSERT INTO MealsFoods 
VALUES (
17, 10,  6, 300
);

INSERT INTO MealsFoods 
VALUES (
18, 11,  8,  500
);

INSERT INTO MealsFoods 
VALUES (
19, 12,  9, 600
);

INSERT INTO MealsFoods 
VALUES (
20, 12,  10, 300
);




