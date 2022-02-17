alert(1);
const vardi = ['Žanis Tārgalis',  'Silvestrs Stallone', "Arnolds Žangēvels", "Žans Vandamme", "Džikijs Čans" ];
const balvas = ["Mobilais", "pica", "Nokia", "rācija", "binoklis"];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector(".rindas");
rindas.innertHTML = "";
for (let i = 0; i < uzvaretajuSkaits; i++){
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapalo uz leju

    let uzvaretajs = vardi[rand];//izvada konsloe
    let laimesti = balvas[rand];

    rindas.innerHTML+=`

    <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    <td>${laimesti}</td>
    </tr>`
}

