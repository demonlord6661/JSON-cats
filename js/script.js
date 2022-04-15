let cats = `{
   "title": "Cat Families",
   "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
   "cats": [
     {
       "name": "Lindy",
       "breed": "Cymric",
       "color": "white",
       "kittens": [
         {
           "name": "Percy",
           "gender": "m"
         },
         {
           "name": "Thea",
           "gender": "f"
         },
         {
           "name": "Annis",
           "gender": "f"
         }
       ]
     },
     {
       "name": "Mina",
       "breed": "Aphrodite Giant",
       "color": "ginger",
       "kittens": [
         {
           "name": "Doris",
           "gender": "f"
         },
         {
           "name": "Pickle",
           "gender": "f"
         },
         {
           "name": "Max",
           "gender": "m"
         }
       ]
     },
     {
       "name": "Antonia",
       "breed": "Ocicat",
       "color": "leopard spotted",
       "kittens": [
         {
           "name": "Bridget",
           "gender": "f"
         },
         {
           "name": "Randolph",
           "gender": "m"
         }
       ]
     }
   ]
}`

const obj = JSON.parse(cats);
document.getElementById("cap").innerHTML = obj.title
document.getElementById("cap2").innerHTML = obj.intro


document.getElementById("cap3").innerHTML = 'mother cat: ' + obj.cats[0].name
document.getElementById("cap4").innerHTML = 'breed: ' + obj.cats[0].breed
document.getElementById("cap5").innerHTML = 'Color: ' + obj.cats[0].color
//hold next line
document.getElementById("cap6").innerHTML = 'mother cat: ' + obj.cats[1].name
document.getElementById("cap7").innerHTML = 'breed: ' + obj.cats[1].breed
document.getElementById("cap8").innerHTML = 'Color: ' + obj.cats[1].color
//hold next line
document.getElementById("cap9").innerHTML = 'mother cat: ' + obj.cats[2].name
document.getElementById("cap10").innerHTML = 'breed: ' + obj.cats[2].breed
document.getElementById("cap11").innerHTML = 'Color: ' + obj.cats[2].color
//kittens next here
//child line set 1
let M1Kittens = JSON.stringify(obj.cats[0].kittens[0].name)
let M2Kittens = JSON.stringify(obj.cats[0].kittens[0].gender)
let M3Kittens = JSON.stringify(obj.cats[0].kittens[1].name)
let M4Kittens = JSON.stringify(obj.cats[0].kittens[1].gender)
let M5Kittens = JSON.stringify(obj.cats[0].kittens[2].name)
let M6Kittens = JSON.stringify(obj.cats[0].kittens[2].gender)
//child line set 1
//child line set 2
let M7Kittens = JSON.stringify(obj.cats[1].kittens[0].name)
let M8Kittens = JSON.stringify(obj.cats[1].kittens[0].gender)
let M9Kittens = JSON.stringify(obj.cats[1].kittens[1].name)
let M10Kittens = JSON.stringify(obj.cats[1].kittens[1].gender)
let M11Kittens = JSON.stringify(obj.cats[1].kittens[2].name)
let M12Kittens = JSON.stringify(obj.cats[1].kittens[2].gender)
//child line set 2
//child line set 3
let M13Kittens = JSON.stringify(obj.cats[2].kittens[0].name)
let M14Kittens = JSON.stringify(obj.cats[2].kittens[0].gender)
let M15Kittens = JSON.stringify(obj.cats[2].kittens[1].name)
let M16Kittens = JSON.stringify(obj.cats[2].kittens[1].gender)
//child line set 3
//doc sends
//end of cat 1-3
document.getElementById('cap12').innerHTML = 'Name: ' + M1Kittens
document.getElementById('cap13').innerHTML = 'Gender: ' + M2Kittens

document.getElementById('cap14').innerHTML = 'Name: ' + M3Kittens
document.getElementById('cap15').innerHTML = 'Gender: ' + M4Kittens

document.getElementById('cap16').innerHTML = 'Name: ' + M5Kittens
document.getElementById('cap17').innerHTML = 'Gender: ' + M6Kittens
//end of cat 1-3
//end of cat 4-6
document.getElementById('cap18').innerHTML = 'Name: ' + M7Kittens
document.getElementById('cap19').innerHTML = 'Gender: ' + M8Kittens

document.getElementById('cap20').innerHTML = 'Name: ' + M9Kittens
document.getElementById('cap21').innerHTML = 'Gender: ' + M10Kittens

document.getElementById('cap22').innerHTML = 'Name: ' + M11Kittens
document.getElementById('cap23').innerHTML = 'Gender: ' + M12Kittens
//end of cat 4-6
//end of cat 7-9
document.getElementById('cap24').innerHTML = 'Name: ' + M13Kittens
document.getElementById('cap25').innerHTML = 'Gender: ' + M14Kittens
document.getElementById('cap26').innerHTML = 'Name: ' + M15Kittens
document.getElementById('cap27').innerHTML = 'Gender: ' + M16Kittens
//end of cat 7-9