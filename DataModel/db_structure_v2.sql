DROP SCHEMA IF EXISTS foodDiary;
CREATE SCHEMA foodDiary;
USE foodDiary;


-- ////////////////////CREATE TABLES////////////////////
CREATE TABLE Foods (
  FoodID int(11) NOT NULL AUTO_INCREMENT,
  FoodName varchar(255) NOT NULL,
  GramsPerServing decimal(10,2) NOT NULL,
  CaloriesPerGram decimal(10,2) NOT NULL,
  CONSTRAINT FoodsPK PRIMARY KEY(FoodID),
  CONSTRAINT FoodsAK UNIQUE(FoodName)
) ;
 
CREATE TABLE Users (
  UserID int(11) NOT NULL AUTO_INCREMENT,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  UserName varchar(255) NOT NULL,
  Password varchar(255) NOT NULL,
  CONSTRAINT UsersPK PRIMARY KEY(UserID),
  CONSTRAINT UsersAK UNIQUE(UserName)
);

CREATE TABLE MealTypes (
    MealTypeID INT(11) NOT NULL AUTO_INCREMENT,
    MealType VARCHAR(255) NOT NULL,
    CONSTRAINT MealTypesPK PRIMARY KEY (MealTypeID),
    CONSTRAINT MealTypesAK UNIQUE(MealType)
);

CREATE TABLE Meals (
  MealID int(11) NOT NULL AUTO_INCREMENT,
  MealDate date NOT NULL,
  MealTypeID int(11) NOT NULL,
  UserID int(11) NOT NULL,
  CONSTRAINT MealsPK PRIMARY KEY(MealID),
  CONSTRAINT MealsFK1 FOREIGN KEY(MealTypeID)
            REFERENCES MealTypes (MealTypeID)
                ON UPDATE NO ACTION
                ON DELETE NO ACTION,
  CONSTRAINT MealsFK2 FOREIGN KEY(UserID)
            REFERENCES Users     (UserID)
                ON UPDATE NO ACTION
                ON DELETE CASCADE
) ;

CREATE TABLE MealsFoods (
  MealsFoodsID int(11) NOT NULL AUTO_INCREMENT,
  MealID int(11) NOT NULL,
  FoodID int(11) NOT NULL,
  GramsConsumed decimal(10,2) NOT NULL,
  CONSTRAINT MealsFoodsPK  PRIMARY KEY(MealsFoodsID),
  CONSTRAINT MealsFoodsFK1 FOREIGN KEY(MealID)
            REFERENCES Meals          (MealID)
                ON UPDATE NO ACTION
                ON DELETE CASCADE,
  CONSTRAINT MealsFoodsFK2 FOREIGN KEY(FoodID)
            REFERENCES Foods          (FoodID)
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
) ;
-- ////////////////////CREATE TABLES////////////////////



