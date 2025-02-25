import { useParams, useNavigate } from 'react-router-dom';

const ToDo = () => {
  function handleSubmit(e){
    
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()); //this will change to sending to server
  }

  
  //get info from backend for to do list
  
  const events = [] = formJson;
  

  //need to seperate days and times, hash table with days or smth
  const toDoList = document.getElementById('to-do-list');
  for(let event of events){
    const newListItem = document.createElement('li');
    newListItem.textContent = event;
    toDoList.appendChild(newListItem);
  }

  return(
    <div className="to-do">
        <ul id="to-do-list">

        </ul>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            List test: <input name="add-events"></input>
          </label>

        </form>  
    </div>
  );
};

export default ToDo;