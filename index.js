const taskContainer= document.querySelector(".task__container");

//global store
let GlobalStore = [];

const newCard=({id,imageUrl, taskTitle, taskType,taskDes}) =>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success" id=${id} onClick="editCard.apply(this, arguments)">
    <i class="fas fa-pencil-alt" id=${id} onClick="editCard.apply(this, arguments)"></i></button>
    <button type="button" class="btn btn-outline-danger" id=${id} onclick="deleteCard.apply(this, arguments)">
    <i class="fas fa-trash" id=${id} onclick="deleteCard.apply(this, arguments)"></i></button>
  </div>
  <div class="card-body container" id="cardBody">
    <img class="card-img-top" alt="photo" src=${imageUrl}/>
    <h5 class="card-title editable" >${taskTitle}</h5>
    <p class="card-text editable" >${taskDes}</p>
    <span class="badge bg-primary editable" >${taskType}</span>
  </div>
  <div class="card-footer text-muted d-flex justify-content-end">
    <button type="button" class="btn btn-outline-primary">Open Task</button>
  </div>
</div>
</div>`;


const updateLocalStorage =() => localStorage.setItem("tasky", JSON.stringify({cards: GlobalStore}));

const loadInitialCardData =() =>{
  const getInitialData = localStorage.tasky;
  if(!getInitialData)return;

  const {cards} = JSON.parse(getInitialData);

  cards.map((card) =>{
    const createNewCard = newCard(card);

  taskContainer.insertAdjacentHTML("beforeend",createNewCard);
  GlobalStore.push(card);

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
updateLocalStorage()


};




const deleteCard =(event) =>{
  //id
  event = window.event;
  const targetId = event.target.id;
  const tagname = event.target.tagName;
  //search globalStore array

  GlobalStore = GlobalStore.filter(
    (card) => card.id !== targetId
  );
  updateLocalStorage();
  window.location.reload(true);


  // access DOM to remove them

 /* if (tagname === "BUTTON") {
    // task__container
    return taskContainer.removeChild(
      event.target.parentNode.parentNode.parentNode // col-lg-4
    );
  }

  // task__container
  return taskContainer.removeChild(
    event.target.parentNode.parentNode.parentNode.parentNode // col-lg-4
  );*/


}



//Edit

const editCard =(event) =>{

  event = window.event;
  const targetId = event.target.id;
  const targetname = event.target.tagName;

  //make fields editable

  const parent= event.target.parentNode.parentNode.parentNode.parentNode;
  const cardBody=parent.querySelector('#cardBody');
  console.log(fields);
  var fields=cardBody.querySelectorAll(".editable");

  for(let i= 0; i<fields.length; i++){
    fields[i].setAttribute("contenteditable","true");
  }

  //transform open task button to save changes button

  saveButton = parent.querySelector(".card-footer").querySelector("button");
  saveButton.setAttribute("onClick","esaveChanges.apply(this, arguments)");
  saveButton.innterHTML="save Changes";
  console.log(saveButton);
}

//https://github.com/pavankpdev/DomManipulationB1