//const util = require('util');

var mockMeals = [
  {
    "2019-02-11" : {
      'breakfast' : {
        'foodItem1' : 'eggs'
      },
      'lunch' : {
        'foodItem1' : 'Peanut Butter and Jelly Sandwich',
        'foodItem2' : 'Coca-cola'
      },
      'dinner' : {
        'foodItem1' : 'Steak',
        'foodItem2' : 'Mash Potatoes',
        'foodItem3' : 'Green Beans'
      },
      'snack' : {
        'foodItem1' : 'Peanuts'
      }
    },
  "2019-02-12" : {
      'breakfast' : {
        'foodItem1' : 'Oatmeal',
        'foodItem2' : 'Coffee'
      },
      'lunch' : {
        'foodItem1' : 'Chicken Salad',
        'foodItem2' : 'Coca-cola'
      },
      'dinner' : {
        'foodItem1' : 'Pork Chops',
        'foodItem2' : 'Collard Greens',
        'foodItem3' : 'Fava Beans'
      },
      'snack' : {
        'foodItem1' : 'Fruit Roll Up'
      }
    }
  }]

var mealsArr = []
mealsArr.push(mockMeals);
//console.log(mealsArr);
//console.log(util.inspect(mockMeals, {showHidden: false, depth: null}));
exports.meals = mockMeals;