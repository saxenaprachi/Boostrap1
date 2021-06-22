const taskContainer= document.querySelector(".task__container");

//global store
const GlobalStore = [];

const newCard=({id,imageUrl, taskTitle, taskType,taskDes}) =>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
  </div>
  <div class="card-body container">
    <img src=${imageUrl} class="card-img-top rounded mb-3" alt="photo">
    <h5 class="card-title ">${taskTitle}</h5>
    <p class="card-text">${taskDes}</p>
    <span class="badge bg-primary">${taskType}</span>
  </div>
  <div class="card-footer text-muted d-flex justify-content-end">
    <button type="button" class="btn btn-outline-primary">Open Task</button>
  </div>
</div>
</div>`;


const loadInitialCardData =() =>{
  const getInitialData = localStorage.getItem("tasky");
  if(!getInitialData)return;

  const {cards} = JSON.parse(getInitialData);

  cards.map((card) =>{
    const createNewCard = newCard(card);

  taskContainer.insertAdjacentHTML("beforeend",createNewCard);
  GlobalStore.push(card);
  console.log(GlobalStore);

  });
};

const saveChanges = () =>{
    const taskdata={
        id: `${Date.now()}`, //unique id genration
        imageUrl:document.getElementById("imgurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDes:document.getElementById("taskdes").value,
    };

    console.log(taskdata);
    const createNewCard = newCard(taskdata);

taskContainer.insertAdjacentHTML("beforeend",createNewCard);
GlobalStore.push(taskdata);
console.log(GlobalStore);

localStorage.setItem("tasky", JSON.stringify({cards: GlobalStore}));
};

