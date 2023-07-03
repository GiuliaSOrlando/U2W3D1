// Esercizio 1

class User {
  constructor(name, surname, age, place, gender) {
    this.firstName = name
    this.lastName = surname
    this.age = age
    this.location = place
    this.gender = gender
    this.ageComparison = function (...users) {
      for (let user of users) {
        if (this.gender === "male" && this.age > user.age) {
          console.log(`${this.firstName} è più vecchio di ${user.firstName}`)
        } else if (this.gender === "female" && this.age > user.age) {
          console.log(`${this.firstName} è più vecchia di ${user.firstName}`)
        } else if (this.age === user.age) {
          console.log(
            `${this.firstName} e ${user.firstName} hanno la stessa età`
          )
        } else {
          console.log(`${this.firstName} è più giovane di ${user.firstName}`)
        }
      }
    }
  }
}

const u1 = new User("Giulia", "Orlando", 30, "Torino", "female")
const u2 = new User("Gabriele", "Orlando", 34, "Torino", "male")
const u3 = new User("Giorgia", "Lorusso", 31, "Torino", "female")
const u4 = new User("Giacomo", "Lorusso", 30, "Torino", "male")
console.log(u3.ageComparison(u1, u2, u4))

//Esercizio 2

const petN = document.getElementById("name")
const ownerN = document.getElementById("owner-name")
const specie = document.getElementById("specie")
const breed = document.getElementById("breed")

const pets = []

class Pet {
  constructor(_petN, _ownerN, _species, _breed) {
    this.petName = _petN
    this.ownerName = _ownerN
    this.species = _species
    this.breeds = _breed
    this.sameOwner = function (...pets) {
      for (let pet of pets) {
        if (this.ownerName === pet.ownerName) {
          return true
        }
      }
    }
  }
}

const renderList = () => {
  const petsList = document.querySelector("ul")
  petsList.innerHTML = ""
  pets.forEach((pet) => {
    const newLi = document.createElement("li")
    newLi.innerText = `Nome dell'animale domestico: ${pet.petName} \n Nome del proprietario: ${pet.ownerName} \n Specie: ${pet.species} \n Razza: ${pet.breeds}`
    petsList.appendChild(newLi)
  })
}

const petForm = document.querySelector("form")
petForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const savedPet = new Pet(petN.value, ownerN.value, specie.value, breed.value)
  pets.push(savedPet)
  petN.value = ""
  ownerN.value = ""
  specie.value = ""
  breed.value = ""
  renderList()
})
