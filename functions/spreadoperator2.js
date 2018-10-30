//========================
//TAKING IN AN OBJECT USING THE SPREAD OPERATOR
//========================
var morning ={
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
}

var dinner = "mac and cheese"

var backpackingMeals={
    ...morning,
    dinner
}

console.log(backpackingMeals) // 
{breakfast: "oatmeal",
lunch: "peanut butter and jelly",
dinner: "mac and cheese"}
