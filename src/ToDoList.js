 import React from 'react';
 import './ToDoList.css'

 export default class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'tasks': [
        {name: 'check this box', checked: true},
        {name: 'dont check this box', checked: false}
      ],
    
        textValue : ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(task){
    // Figure out which task was checked
    console.log(task);


    task.checked = !task.checked;

    // Change the task from checked to unchecked, or vice versa.
    this.setState({
      tasks: this.state.tasks
    });


    // copy this.state.tasks into a new list. then update the task in the new list that u want to update.

    // At the end of the day, we gotta do setState on the 'tasks'.
   // tthis.setState({
     // asks: // something
    //});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.textValue);
    let newTaskThingamajig= {
      'name' : this.state.textValue, 
      checked : false
    }
    console.log(newTaskThingamajig);
    const taskArray = [
      newTaskThingamajig,
      ...this.state.tasks
    ];
    console.log(taskArray);
    this.setState({
      tasks : taskArray
    })

  }
  /// add a function to delete tasks

  /// PERHAPSAMENTE add PRIORITY coloring for features (GREEN, YELLOW, RED, default probably yellow although ill ask someone else what they think)

  /// 
  renderCurrentTasks(){
    return (
      <ul>
        {this.state.tasks.map((task, index)=> {
          return(
            <li key={task.name}>
              <input type='checkbox'
              checked={task.checked}
              // Here we are creating a new arrow function. When that function is called, it's gonna call handleCheckboxChange with the task object
              onChange={() => this.handleCheckboxChange(task)}/>
              {task.name}
            </li>
          );
        })}
       </ul> 
    );
  }
  render() {

    return (
      <div className='ToDoList'>


         <h2>Your Current Tasks</h2>
        {this.renderCurrentTasks()}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Tasks" className ="Tasks">
            what would you like to accomplish today?

            </label>
          <input type="text"
            className="task-input"
            placeholder="howdy"
            value={this.state.textValue}
            onChange={
              (event) => {
                this.setState({
                  textValue: event.target.value
                })
              }
            }
          >
          </input>
          <input type="submit" value="Submit">
          </input>
        </form>
      </div>
    );
  }

}