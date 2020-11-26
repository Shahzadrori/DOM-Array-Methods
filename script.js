 const main = document.getElementById('main');
 const adduserbtn = document.getElementById('add-user');
 const doublebtn = document.getElementById('double');
 const shaowmillionairesbtn = document.getElementById('show-millionaires');
 const sortbtn = document.getElementById('sort');
 const calculatewealthbtn = document.getElementById('calculate-wealth');

let data = [];
getrandomuser();
getrandomuser();
getrandomuser();

//Fetch random user and money
async function getrandomuser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    
    const newuser = {
        name:`${user.name.first} ${user.name.last}`,
       money:Math.floor(Math.random() * 1000000)
    };
    addData(newuser);
}

//adding a new object
function addData(obj){
    data.push(obj);

    updateDOM();
}

//update DOM
function updateDOM(provideData = data){
    //clearing div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'
    provideData.forEach(item =>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>
        ${formatMoney(item.money)}`;
        main.appendChild(element);
    })
}
// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string


function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}