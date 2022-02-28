const loadCards=()=>{
    const inputValue=document.getElementById("inputValue");
    let mainContainer=document.getElementById("Main");
    const error=document.getElementById("error");
   
    const inputValueCon=parseInt(inputValue.value);
    if(isNaN(inputValueCon) || inputValueCon=='')
    {
        error.innerText='Please give a Number';
        inputValue.value='';
        mainContainer.innerHTML='';
        //alert("Please Enter a Number");
    }
    else if(inputValueCon<=0)
    {
        error.innerText='Please give a positive Number';
        inputValue.value='';
        mainContainer.innerHTML='';
        //alert("Please Enter a Number");
    }
    else{
        mainContainer.innerHTML='';   
     fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValueCon}`)
    .then(res=>res.json())
    .then(data=>displayCard(data.cards))
    inputValue.value='';
    error.innerText='';
    }    
   
}
const displayCard=(cards)=>{
   const mainContainer=document.getElementById("Main");
    for(const card of cards)
    {
        const div=document.createElement("div");  
        div.classList.add("col-lg-4");    
        div.classList.add("mb-3");    
        div.innerHTML=`   
        <div class="card" style="width: 18rem;">
        <img src="${card.image}" class="card-img-top">        
        <div class="card-body">
            <h5 class="card-title">${card.code}</h5>
            <p class="card-text">${card.suit}</p>
            <p class="card-text">${card.value}</p>
            <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
        </div>
        </div>
        `;
        mainContainer.appendChild(div);
        error.innerHTML='';
        //  console.log(card);
    }
}

const cardDetails =(code)=>{
    const mainContainer=document.getElementById("Main");
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    .then(res=>res.json())
    .then(data=>{
        const allCard=data.cards;
        const singleCardDisplay=allCard.find(card=>card.code===code);
        mainContainer.innerHTML='';
        const div=document.createElement("div");
        div.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${singleCardDisplay.image}" class="card-img-top">        
        <div class="card-body">
            <h5 class="card-title">${singleCardDisplay.code}</h5>
            <p class="card-text">${singleCardDisplay.suit}</p>
            <p class="card-text">${singleCardDisplay.value}</p>
            <button onclick="cardDetails('${singleCardDisplay.code}')" class="btn btn-primary">See Details</button>
        </div>
        </div>        
        `;
        mainContainer.appendChild(div);
    })
}

  // <h2>${card.code}</h2>
        // <p>${card.image}</p>