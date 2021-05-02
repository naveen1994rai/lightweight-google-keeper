import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const [expand, setExpand] = useState(false);

  function enableExpand(){
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={(e) => (e.preventDefault())}>
      {expand && <input
          onChange={props.onChange}
          name="title"
          placeholder="Title"
          value={props.note.title}
          autocomplete="off"
        />}
        
        <textarea
          onChange={props.onChange}
          onClick={enableExpand}
          name="content"
          placeholder="Take a note..."
          rows={expand ? "3" : "1"}
          value={props.note.content}
        />
        <Zoom in={true}>
          <Fab onClick={props.onClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
