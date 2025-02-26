//import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react' //we use useState instead of native html

const ToDo = () => {
  const [events, setEvents] = useState([]);
  function handleSubmit(e){
    e.preventDefault(); //prevents form from POST to backend
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()); //this will change to sending to server
 
    setEvents([...events, formJson["add-events"]])

    //reset form 
    form.reset();
  }

  return(
    <div className="to-do">
        <ul id="to-do-list">
         {events.map((event, index) => ( //
           <li key={index}>{event}</li>
         ))}
        </ul>
        <form method="post" onSubmit={handleSubmit}>
          <label>
            List test: <input name="add-events"></input>
          </label>
          <button type="submit">Add</button>
        </form>  
    </div>
  );
};

export default ToDo;