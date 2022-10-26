let url = "https://api.github.com/users/Hayk995"
async function f(){
    
    let reposit = await fetch(url)
    let user = await reposit.json()
    document.getElementById("img").innerHTML += `<img src = ${user["avatar_url"]} alt = "avatar"/>`
    let date = `${user["created_at"]}`.slice(0,10)
 
    document.getElementById("name").innerHTML += `${user["name"]}`
    document.getElementById("date").innerHTML += `${date}`
    document.getElementById("follow").innerHTML += `${user["followers"]}`
    document.getElementById("following").innerHTML += `${user["following"]}`
}
f()


let repo = "https://api.github.com/users/Hayk995/repos"
async function a(){
    let reposi = await fetch(repo)
    let user1 = await reposi.json()
    let result = user1.map(a => a.name);
for (index = 0; index < result.length; index++) {
    document.getElementsByClassName("bar")[0].innerHTML += `<tr><td></td><td>${result[index]}</td></tr>`
}

}
a()
