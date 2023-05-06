import React, { useEffect, useState } from "react";
import Button from "../Helpers/Button";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

const Task = () => {
  const [handleTask, sethandleTask] = useState({
    tasks: "",
    taskdate: "",
  });
  const [Yourtasks, setYourtasks] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const delItem = (id) => {
    const deleteItem = Yourtasks.filter((item) => {
      return item.id !== id;
    });
    setYourtasks(deleteItem);
    saveTask(deleteItem)
  };

  // to get task from local storage
  const getTask = ()=>{
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    if(tasks){
      setYourtasks(tasks)
    }
  }

  // to set the task in local storage
  const saveTask = (tasks)=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  useEffect(()=>{
      getTask();

  },[])

  const handlesubmit = () => {
    if (handleTask.tasks == "" || handleTask.taskdate == "") {
      setIsEmpty(true);
    } else {
      const newTask = {
        tasks: handleTask.tasks,
        taskdate: handleTask.taskdate,
        id: Date.now(),
      };
      setYourtasks([...Yourtasks, newTask]);
      setIsEmpty(false);
      sethandleTask((prev) => {
        return {
          ...prev,
          tasks: "",
          taskdate: "",
        };
      });
      saveTask([...Yourtasks, newTask])
    }
  };

  return (
    <>
      <Wrapper>
        <div className="TaskSpecify">
          <div className="heading">
            <p className="date">Date</p>
            <p className="task">Task</p>
          </div>
          <div className="actions">
            <input
              onChange={(e) =>
                sethandleTask((prev) => {
                  return {
                    ...prev,
                    taskdate: e.target.value,
                    tasks: prev.tasks,
                  };
                })
              }
              value={handleTask.taskdate}
              className="Date"
              type="datetime-local"
            />
            <input
              onChange={(e) =>
                sethandleTask((prev) => {
                  return {
                    ...prev,
                    taskdate: prev.taskdate,
                    tasks: e.target.value,
                  };
                })
              }
              value={handleTask.tasks}
              className="TaskName"
              placeholder="Specify your Task"
              type="text"
            />
            <Button className="btn" onclick={handlesubmit} text="Add" />
            <div className="alert">
              {isEmpty ? <p>Please Enter all the Fields</p> : null}
            </div>
          </div>
        </div>

        {Yourtasks.map((item, index) => {
          return (
            <Output key={index} className="task-section">
              <div className="details">
                <div className="taskname">{item.tasks}</div>
                <div className="setDate">{item.taskdate}</div>
              </div>
              <div className="delete">
                <BsFillTrashFill
                  className="delIcon"
                  onClick={() => delItem(item.id)}
                />
              </div>
            </Output>
          );
        })}
      </Wrapper>
    </>
  );
};

const Output = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 39%;
  border: 1px solid grey;
  padding: 12px 0px 12px 18px;
  border-radius: 10px;
   @media (max-width:480px){
    width: 80%;
    margin-left: -6%
   }
   @media (min-width: 768px){
    width:48%;

  }

  .taskname {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  .setDate {
    color: grey;
  }
  .delete {
    background-color: transparent;

    padding: 6px 7px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    .delIcon {
      font-size: 1.4rem;
    }
    &:hover {
      cursor: pointer;
      background-color: red;
      color: white;
      transition: 0.3s ease-in-out;
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  .TaskSpecify {
    width: 40%;

    .heading {
      background-color: #2f3542;
      display: flex;
      color: white;

      .date {
        margin-left: 1rem;
      }
      .task {
        margin-left: 15rem;
      }
    }
    .actions {
      border: 1px solid black;
      padding: 12px 8px;
      .alert {
        p {
          color: red;
          text-align: center;
          font-weight: bold;
        }
      }
      .Date {
        width: 40%;
        border: none;
        font-weight: 400;
        font-size: 1.1rem;
        &:focus {
          outline: none;
        }
        @media (max-width:480px){
          margin-left:4%;
          width:40%;
        }
      }
      .TaskName {
        margin-left: 30px;
        border: hidden;
        font-weight: 600;
        font-size: 1.1rem;
        &:focus {
          outline: none;
        }
        @media (max-width: 480px) {
          width:47%;


        }
      }


    }
    @media (max-width:768px){
      width:75%
    }
    @media (max-width:480px){
      width:97%;
      margin-left:-25px
    }

    @media (min-width: 768px){
      width:50%
    }
  }
`;

export default Task;
