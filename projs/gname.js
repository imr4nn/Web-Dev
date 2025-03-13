let adj = {
    1: "Adorable",
    2: "Amazing",
    3: "Fire",
}
let shop =
{
    1: "foods",
    2: "clothes",
    3: "Engine",
}
let gname = {
    1: "Limited",
    2: "Bros",
    3: "Hub",
}

let x = Math.floor(Math.random() * 3) + 1;
let y = Math.floor(Math.random() * 3) + 1;
let z = Math.floor(Math.random() * 3) + 1;

console.log(x, y, z)
console.log(`Another One : ${adj[x]} ${shop[y]} ${gname[z]}`);


function fac(a) {
    let v = 1;
    while (a > 0) {
        v *= a;
        a--;
    }
    return v
}
console.log(fac(5))