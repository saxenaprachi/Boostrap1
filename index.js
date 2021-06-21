const taskContainer= document.querySelector(".task__container");

const newCard=({id,imageUrl, taskTitle, taskType,taskDes}) =>`<div class="col-md-6 col-lg-4" id=${id}>
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
  </div>
  <div class="card-body container">
    <img src=${imageUrl}>
    <h5 class="card-title ">${taskTitle}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <span class="badge bg-primary">${taskType}</span>
  </div>
  <div class="card-footer text-muted d-flex justify-content-end">
    <button type="button" class="btn btn-outline-primary">${taskDes}</button>
  </div>
</div>
</div>`;




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
};

