// Esercizio 1

class User {
  constructor(name, surname, age, place) {
    this.firstName = name
    this.lastName = surname
    this.age = age
    this.location = place
    this.ageComparison = function (...users) {
      for (let user of users) {
        if (this.age > user.age) {
          console.log(`${this.firstName} è più vecchio/a di ${user.firstName}`)
        } else if (this.age === user.age) {
          console.log(
            `${this.firstName} e ${user.firstName} hanno la stessa età`
          )
        } else if (this.age < user.age) {
          console.log(`${this.firstName} è più giovane di ${user.firstName}`)
        }
      }
    }
  }
}

const u1 = new User("Giulia", "Orlando", 30, "Torino")
const u2 = new User("Gabriele", "Orlando", 34, "Torino")
const u3 = new User("Giorgia", "Lorusso", 31, "Torino")
const u4 = new User("Giacomo", "Lorusso", 30, "Torino")
console.log(u1.ageComparison(u2, u3, u4))

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
    newLi.innerText = `${pet.petName} ${pet.ownerName} ${pet.species} ${pet.breeds}`
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
