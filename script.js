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
    adddata(newuser);
}