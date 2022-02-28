// const Kibriya =
// {
//     id:102,
//     name:"RJ Kibriys",
//     money:5000,
//     treatDay:function(expence){
//         this.money=this.money-expence;
//         console.log('Hi',this.money);
//         return this.money;
//     }
// }
// const HeroBalam =
// {
//     id:103,
//     name:"Hero Balam",
//     money:3000
// }

// function add(a,b){

// }

const loadSingleUser=()=>{
    fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>displaySingleUser(data.results[0]))
}
loadSingleUser();

const displaySingleUser =(user)=>{
    console.log(user);
}

const loadMealItem=(SearchText)=>
{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchText}`)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))
}
loadMealItem('fish');

const displayMeal =(meals)=>{
    const mealContainer=document.getElementById("mealcontext");
    meals.forEach(meal => {
        const div=document.createElement('div');
        div.innerHTML= `
        <h3>${meal.strMeal}</h3>
        <button onclick="loadMealDetails('${meal.strMeal}')">Click me </button>
        
        `;
        mealContainer.appendChild(div);    
        
    });
}
const loadMealDetails=(mealName)=>{
console.log(mealName);
}
