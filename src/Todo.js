import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { db } from './firebase_config';

const TodoListItem = ({ todo, in_progress, id }) => {

    const toggleInProgress = () => {
        db.collection("Apptodo").doc(id).update({
            in_progress: !in_progress,

        });
    }

    const deleteTodo = () => {
        db.collection("Apptodo").doc(id).delete()
    }



    return (
        <div className="App">
            <div>
                <ListItem style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left",
                    width: "100%",
                }}>
                    <ListItemText primary={todo} secondary={in_progress ? (<h3>In progress </h3>) : "Completed"} style={{ fontWeight: "600" }} />
                </ListItem>

                <Button style={{ marginRight: "5px" }} variant="contained" color="primary" onClick={toggleInProgress}>
                    {in_progress ? "Done" : "Undone"}
                </Button>



                <Button variant="contained" color="secondary" onClick={deleteTodo} style={{ marginTop: "0", marginLeft: "15px" }}>
                    DELETE
                </Button>
            </div>
        </div>
    )
}
export default TodoListItem;