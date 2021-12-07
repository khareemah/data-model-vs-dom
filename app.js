let people = [
  {
    name: "trent",
    number: 66,
    position: "defender",
    good: true,
    id: 1,
  },
  {
    name: "virgil van dijk",
    number: 4,
    position: "defender",
    good: true,
    id: 2,
  },
  {
    name: "fred",
    number: 31,
    position: "center back",
    good: true,
    id: 3,
  },
  {
    name: "mo salah",
    number: 11,
    position: "striker",
    good: true,
    id: 4,
  },
];

const container = document.querySelector(".container");
const clearAllBtn = document.querySelector(".clear-all");
const refreshListBtn = document.querySelector(".refresh-list");

function displayPeople(people) {
  const peopleArray = people.map((person) => {
    if (person.good) {
      const { name, number, position, id } = person;
      return `      <div class="card">
        <h1 class="name">${name.toUpperCase()}</h1>
        <p class="age">${number}</p>
        <h3 class="title">${position}</h3>
        <button class="btn" data-id= ${id}>remove</button>
      </div>`;
    }
  });

  container.innerHTML = peopleArray.join("");

  //   const buttons = [...document.querySelectorAll(".btn")];
  //   buttons.forEach((button) => {
  //     button.addEventListener("click", function () {
  //       const id = button.dataset.id;
  //       const newpeople = people.filter((person) => person.id != id);
  //       displayPeople(newpeople);
  //     });
  //   });

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
      const id = e.target.dataset.id;
      const newPeople = people.map((person) => {
        if (person.id == id) {
          person.good = false;
        }
        return person;
      });
      //   console.log(newPeople);
      displayPeople(newPeople);
    }
  });
}

displayPeople(people);

function displayGoodPeople() {
  const goodPeople = people.filter((people) => people.good);
  displayPeople(goodPeople);
}

function addPerson(name, number, position, good) {
  const newPerson = {
    name,
    number,
    position,
    good,
    id: 5,
  };
  people.push(newPerson);
  displayPeople(people);
}

// addPerson("robbertson", 22, "defender", true);

clearAllBtn.addEventListener("click", function () {
  displayPeople([]);
});
refreshListBtn.addEventListener("click", refreshList);

function refreshList() {
  const newPeople = people.map((person) => {
    person.good = true;
    return person;
  });
  displayPeople(newPeople);
}
function removePerson(id) {
  const newPeople = people.filter((person) => person.id != id);
  console.log(newPeople);
  displayPeople(newPeople);
}
// removePerson(2);
