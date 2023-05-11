let submit = document.getElementById("submit")
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let country = document.getElementById("country")
let point = document.getElementById("point")
let error = document.querySelector("#error")
let add = document.getElementById("add")


function up(x) {
    let up = x.slice(0, 1).toUpperCase()
    let down = x.slice(1).toLowerCase()
    let get = up + down
    return get
}



submit.addEventListener("click", () => {

    if (lastName.value.length == 0 || firstName.value.length == 0 || country.value.length == 0 || point.value.length == 0) {
        error.style.display = "block"
    }
    else {
        error.style.display = "none"

        /* 
       todo: Create
       */

        let card = document.createElement("div")
        let name = document.createElement("div")
        let countryCard = document.createElement("div")
        let pointCard = document.createElement("div")
        let push = document.createElement("div")
        let fullName = document.createElement("p")
        let dateAdd = document.createElement("span")
        let countryName = document.createElement("p")
        let score = document.createElement("p")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        let span3 = document.createElement("span")
        let icon = document.createElement("i")

        /* 
       todo: Add Class
       */



        card.classList.add("card")
        name.classList.add("name")
        countryCard.classList.add("country")
        pointCard.classList.add("point")
        push.classList.add("push")

        icon.classList.add("fa-solid")
        icon.classList.add("fa-trash-can")
        icon.style.color = "black"

        /* 
        todo: inner HTML 
        */

        // FULL NAME

        let first = up(firstName.value)
        let last = up(lastName.value)
        let fullN = first + " " + last

        fullName.textContent = fullN

        // DATE

        let date = new Date()
        let mounthNumber = date.getMonth()
        let day = date.getDay()
        let year = date.getFullYear()
        let hour = date.getHours()
        let munite = date.getMinutes()

        dateAdd.textContent = `${mounth[mounthNumber]} ${day}, ${year} ${hour}:${munite} `

        // COUNTRY


        countryName.textContent = up(country.value)

        // Point

        score.textContent = point.value

        // SPAN BUTTON

        span1.setAttribute("class", "delete")
        span2.setAttribute("class", "plus")
        span3.setAttribute("class", "minus")

        span2.innerHTML = "+5"
        span3.innerHTML = "-5"

        /* 
       todo: Append
       */

        name.append(fullName)
        name.append(dateAdd)

        countryCard.append(countryName)

        pointCard.append(score)

        span1.append(icon)

        push.append(span1)
        push.append(span2)
        push.append(span3)

        card.append(name)
        card.append(countryCard)
        card.append(pointCard)
        card.append(push)

        add.append(card)

        // +5 -5 Delete

        span1.addEventListener("click", () => {
            add.removeChild(card)
        })

        span2.addEventListener("click", () => {
            let a = parseInt(score.textContent)
            a += 5
            score.textContent = a
        })

        span3.addEventListener("click", () => {
            let a = parseInt(score.textContent)
            a -= 5
            score.textContent = a
        })


    }

})