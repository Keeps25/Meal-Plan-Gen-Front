import React, { useState, useEffect } from "react"
import styles from './styles.module.css'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'



class Input extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

//   handleChange(e) {
//     this.props.onParameterChange(e.target.value);
//   }

  render() {
    return (
      <div className = {styles.inputContainer}>
        {
          /**
           * Input for Desired Calorie Count for the Week
           */
        }
        {/*<label className = {styles.inputLabel} for="calCount">Calorie Count:</label>*/}
        <br></br>
        {/* <Jumbotron className='jumbo'>
        <h1>Meal Plan Site</h1>
        <div className={styles.inputContainer}>
          <input type='number' className={styles.inputTextBox} onvalue={calCount}
            placeholder= {this.props.title}
            onChange={event => setCalCount(event.target.value)}/>
        </div>
        <Button variant='outline-light' className="btn" as="input" type="submit" value="Submit" />{' '}
      </Jumbotron> */}
      
        <input onChange = {this.handleChange} className = {styles.inputTextBox} placeholder = {this.props.title}  id="calCount" name="calCount" type="number"></input>
        
      </div>
    );
  }
}

class IngredientsList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const ingredients = this.props.ingredients;
    const ingredientTitle = ingredients.map((ingredient) =>
      <li className = {styles.modalHeader}>{ingredient.quantity} {ingredient.units}s of {ingredient.name}</li>
    );

    return (
      <ul className = {styles.modalTable}>
        {ingredientTitle}
      </ul>
    );
  }
}

class Meal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(this.state.modalOpen) {
      this.setState({
        modalOpen: false,
      });
    } else {
      this.setState({
        modalOpen: true,
      });
    }
    
  }
  

  render() {
    const name = this.props.meal.name;

    return (
      <div>
        {/*
        <div id="myModal" className={this.state.modalOpen ? styles.modalOpen : styles.modal}>
          <div className={styles.modalContent}>
            <span onClick={this.handleClick} className = {styles.close}>&times;</span>
            <IngredientsList ingredients = {this.props.meal.ingredients} class="popuptext" id="myPopup"></IngredientsList>
          </div>
        </div>*/}
        <Modal.Dialog className={this.state.modalOpen ? styles.modalOpen : styles.modal}>
          <Modal.Header closeButton>
            <Modal.Title>Ingredients</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <IngredientsList ingredients = {this.props.meal.ingredients}></IngredientsList>
          </Modal.Body>

          <Modal.Footer>
            <Button variant = "secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>

        <input onClick={this.handleClick} type = "submit" value = {name} className={styles.tableButton}></input>
      </div>
      
    );

  }
}



export default class HomePage extends React.Component {
  // const [calorieTarget, setCalorieTarget] = useState(0)
  // const handCalorieInput = (event) 

  

  constructor(props) {
    super(props);
    this.state = {
      calorieTarget: 0,

      isActive: false,
      mealPlan: false,
      jerseySlide: false,

      items: 0,
      isLoaded: false,

      week: 0,
    };
    this.handleCalorieChange = this.handleCalorieChange.bind(this);
    this.submitClicked = this.submitClicked.bind(this);

    
  }

  handleJSON() {

    var weeklyMealPlan = json;
    
    this.setState({week: weeklyMealPlan});

    
  }


  handleCalorieChange(e) {
    this.setState({calorieTarget: e});
  }

  submitClicked() {
    this.handleJSON();
    


    /*fetch("www.weeklyplates.tech/?calories=2000")
    .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    console.log(this.state.items);*/

    this.setState({isActive: true, jerseySlide: true});
    console.log(this.state.isActive);
    console.log("debug");

    setTimeout(function() {
      this.setState({mealPlan: true})}.bind(this), 500);
    
    setTimeout(function() {
      this.setState({jerseySlide: false})}.bind(this), 2000);
    
  }

  render() {
      if(this.state.mealPlan) {
        return (
          <div className = {styles.mealPlanContainer}>
            <div className = {styles.titleContainerMealPlan}>
              <h2 className={styles.title}>Weekly Plates</h2>
            </div>

            <div className = {this.state.jerseySlide ? styles.tableContainer2 : styles.tableContainer}>
              <Table className = {styles.mealPlanTable}>
                <thead>
                  <tr>
                    <th>Meal Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <th>Breakfast</th>
                    <td><Meal meal={this.state.week.Monday.Breakfast}></Meal></td>
                    <td><Meal meal={this.state.week.Tuesday.Breakfast}></Meal></td>
                    <td><Meal meal={this.state.week.Wednesday.Breakfast}></Meal></td>
                    <td><Meal meal={this.state.week.Thursday.Breakfast}></Meal></td>
                    <td><Meal meal={this.state.week.Friday.Breakfast}></Meal></td>
                    <td><Meal meal={this.state.week.Saturday.Breakfast}></Meal></td>
                    <td><Meal meal={this.state.week.Sunday.Breakfast}></Meal></td>

                  </tr>
                  <tr>
                    <th>Lunch</th>
                    <td><Meal meal={this.state.week.Monday.Lunch}></Meal></td>
                    <td><Meal meal={this.state.week.Tuesday.Lunch}></Meal></td>
                    <td><Meal meal={this.state.week.Wednesday.Lunch}></Meal></td>
                    <td><Meal meal={this.state.week.Thursday.Lunch}></Meal></td>
                    <td><Meal meal={this.state.week.Friday.Lunch}></Meal></td>
                    <td><Meal meal={this.state.week.Saturday.Lunch}></Meal></td>
                    <td><Meal meal={this.state.week.Sunday.Lunch}></Meal></td>
                    
                  </tr>
                  <tr>
                    <th>Dinner</th>
                    <td><Meal meal={this.state.week.Monday.Dinner}></Meal></td>
                    <td><Meal meal={this.state.week.Tuesday.Dinner}></Meal></td>
                    <td><Meal meal={this.state.week.Wednesday.Dinner}></Meal></td>
                    <td><Meal meal={this.state.week.Thursday.Dinner}></Meal></td>
                    <td><Meal meal={this.state.week.Friday.Dinner}></Meal></td>
                    <td><Meal meal={this.state.week.Saturday.Dinner}></Meal></td>
                    <td><Meal meal={this.state.week.Sunday.Dinner}></Meal></td>
                  </tr>
                </tbody>

              </Table>

            </div>

          </div>
        );
      } else {
        return (
          <div className = {styles.body}>
            <div className = {styles.page}>
              <div className = {this.state.isActive ? styles.titleContainer2 : styles.titleContainer}>
                <h2 className={styles.title}>Weekly Plates</h2>
              </div>
        
              <div id = 'parameterContainer' className = {this.state.isActive ? styles.parameterContainer2 : styles.parameterContainer}>
                <div>
                  <Input title="Calorie Count" styleID = "calCount" onParameterChange = {this.handleCalorieChange}/>
                </div>
    
                <div className = {styles.submitContainer}>
                  <br></br>
                    
                    {/*
                    <a href = "#parameterContainer" className = {styles.submitButton}>Submit</a>
                    */}
                    
                    <input onClick = {this.submitClicked} className = {styles.submitButton} type="submit" value="Submit"></input>
                    
                </div>
              </div>
    
            </div>
    
    
          </div>
          
        
        );
      }
      
    //}
  }
    
  
}





const json = {
  "Monday":{
     "Breakfast":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     },
     "Lunch":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     },
     "Dinner":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     }
  },
  "Tuesday":{
     "Breakfast":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Lunch":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     },
     "Dinner":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     }
  },
  "Wednesday":{
     "Breakfast":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Lunch":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     },
     "Dinner":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     }
  },
  "Thursday":{
     "Breakfast":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     },
     "Lunch":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Dinner":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     }
  },
  "Friday":{
     "Breakfast":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Lunch":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Dinner":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     }
  },
  "Saturday":{
     "Breakfast":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Lunch":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Dinner":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     }
  },
  "Sunday":{
     "Breakfast":{
        "name":"ham sandwich",
        "picture_id":"null",
        "calories":"330",
        "ingredients":[
           {
              "name":"bread",
              "quantity":"1.0",
              "units":"slice"
           },
           {
              "name":"ham",
              "quantity":"1.0",
              "units":"slice"
           }
        ]
     },
     "Lunch":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     },
     "Dinner":{
        "name":"clam chowder",
        "picture_id":"null",
        "calories":"738",
        "ingredients":[
           {
              "name":"sham",
              "quantity":"1.0",
              "units":"showdy"
           },
           {
              "name":"chowder",
              "quantity":"0.5",
              "units":"clam"
           },
           {
              "name":"gold",
              "quantity":"0.1",
              "units":"nugget"
           }
        ]
     }
  }
}