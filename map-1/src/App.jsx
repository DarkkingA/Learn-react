import React from "react";

/*const listeF = [
  { title :"Pomme",
    isFruit:true,
    id:1   
},
{
  title:"Banane",
  isFruit:true,
  id:2
},
{
  title:"choux",
  isFruit:false,
  id:3
},
{
  title:"orange",
  isFruit:true,
  id:4
}

]

const listitem = listeF.map((produit) =>
  <li key={produit.id}
          style={{
            color: produit.isFruit ? "green":"red"
          }}>
    {produit.title}
  </li>)

const noms = ["Jean", "Marie", "Paul"]

const lnom = noms.map((n)=>
<li>
 Bonjour {n}
</li>)
const nombres = [1,2,3,4,5]
const double = nombres.map((n)=>n*2)

const villes = ["lomé","paris","tokyo"]
const up= villes.map((n)=>n.toUpperCase())

const x =["Chat","Chien","Oiseau"]
const y = x.map((n)=> n +"💔")

alert(y)

const users = [
 {id:1, nom:"Aime"},
 {id:2, nom:"John"},
 {id:3, nom:"Alice"}
]

const name = users.map((n)=> n.nom)
alert(name)
const idt=[
{
nom:"Aime",
age:18
}
] 
const lidt= idt.map((n)=> n.nom +"  a " + n.age +"  ans" )
let  e =[
{
nom:"Aime",

}
]

e = e.map((n)=>{n.connecte=true  
  return n
})
const p=[
{
produit:"Clavier",
prix:10000
}
]
const pttc= p.map((n)=> n.prix + (n.prix *18)/100
  
)
const l=["HTML","CSS","JS"]

const ll = l.map((n)=>
  <li>{n}</li>
)*/
let produit = [
  { title: 'banane', prix: 200 },
  { title: 'pomme', prix: 300 },
  { title: 'orange', prix: 250 },
  { title: 'mangue', prix: 500 },
  { title: 'ananas', prix: 800 },
  { title: 'pastèque', prix: 1200 },
  { title: 'papaye', prix: 400 },
  { title: 'citron', prix: 150 },
  { title: 'fraise', prix: 700 },
  { title: 'kiwi', prix: 600 }
];

let achat = produit.map((n)=>
  <div>
    <h1>Nom :{n.title}</h1>
    <h2>Prix: {n.prix}</h2>
    <button>Acheter</button>
  </div>
)
 



export default function App(){
  return<>
         {achat}
  </>
}