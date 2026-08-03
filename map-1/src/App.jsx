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
)
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
 
 let img = [
  {
    url: "https://cdn.pixabay.com/photo/2017/01/20/00/30/bananas-1995073_1280.jpg",
    alt: "Bananes jaunes mûres sur fond blanc"
  },
  {
    url: "https://cdn.pixabay.com/photo/2015/09/09/18/34/apple-932478_1280.jpg",
    alt: "Pommes rouges fraîches sur une table"
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/01/20/00/30/oranges-1995074_1280.jpg",
    alt: "Oranges entières et tranchées avec feuilles vertes"
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/03/05/19/02/mango-1239341_1280.jpg",
    alt: "Mangue mûre et mangue tranchée dans un bol"
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/03/05/19/02/pineapple-1239342_1280.jpg",
    alt: "Ananas entier avec couronne verte"
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/07/18/23/54/watermelon-2518844_1280.jpg",
    alt: "Tranches de pastèque rouge avec graines noires"
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/01/20/00/30/papaya-1995075_1280.jpg",
    alt: "Papaye coupée montrant chair orange et graines"
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/03/05/19/02/lemon-1239343_1280.jpg",
    alt: "Citrons jaunes mûrs sur une branche"
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/01/20/00/30/strawberries-1995076_1280.jpg",
    alt: "Fraises rouges brillantes avec feuilles vertes"
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/03/05/19/02/kiwi-1239340_1280.jpg",
    alt: "Kiwis entiers et coupés montrant chair verte"
  }
]

const affichage = img.map((n)=>
<div>
  <img src ={n.url}
  alt={n.alt}
  style={{
    width : 100,
    height:100,
    borderRadius:25
  }}
  ></img>

</div>)


let etudiants = [
  { nom: "Alfred", age: 22, classe: "Informatique", matricule: "IAI2025-01" },
  { nom: "Sarah", age: 21, classe: "Mathématiques", matricule: "IAI2025-02" },
  { nom: "Jean", age: 23, classe: "Physique", matricule: "IAI2025-03" },
  { nom: "Mariam", age: 20, classe: "Biologie", matricule: "IAI2025-04" },
  { nom: "David", age: 24, classe: "Chimie", matricule: "IAI2025-05" },
  { nom: "Awa", age: 22, classe: "Économie", matricule: "IAI2025-06" },
  { nom: "Koffi", age: 25, classe: "Informatique", matricule: "IAI2025-07" },
  { nom: "Nadia", age: 21, classe: "Littérature", matricule: "IAI2025-08" },
  { nom: "Michel", age: 23, classe: "Philosophie", matricule: "IAI2025-09" },
  { nom: "Fatou", age: 20, classe: "Droit", matricule: "IAI2025-10" }
]

let affichage = etudiants.map((n)=>
<div>
  <h1>Nom:{n.nom}</h1>
  <h1>Age:{n.age}</h1>
  <h1>Classe : {n.classe}</h1>
</div>)

let taches = [
  { title: "Réviser le cours de React", complete: false },
  { title: "Faire les exercices de mathématiques", complete: true },
  { title: "Préparer le projet Node.js", complete: false },
  { title: "Lire un chapitre de manga", complete: true },
  { title: "Mettre à jour le CV", complete: false },
  { title: "Faire les courses au marché", complete: true },
  { title: "Configurer l’environnement Linux", complete: false },
  { title: "Publier un post sur Dr Drama", complete: true },
  { title: "Étudier les concepts de réseau CCNA", complete: false },
  { title: "Regarder un épisode de K-drama", complete: true }
]
const affichage= taches.map((n)=>

<li >{n.title} <input type="checkbox" checked={n.complete} />  </li>

)*/



export default function App(){
   return<>
         {affichage}
  </>
}