import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    members: []
  }

  componentDidMount () {
    const url = 'http://localhost:8000/api/members'
    fetch(url,
    {
        "Content-type": "application/json", 
        "Accept": "application/json"
    })
    .then(response => response.json())
    .then(data => this.setState({members: data.members}))
    .catch(error => console.log(`An error has occured in the intial api call ${error}`))
  }

  render() {
    const boxStyle = {
                        border: '1px solid black', 
                        backgroundColor: 'lightblue', 
                        padding: '1rem',
                        margin: '1rem 1.2rem'
                     }
    return (
      <div>
        <h3>Members</h3>
        <p>This react component is making an api call to the express server. On the express server we have to allow cross origin in the Headers sent with each response to the client (React) in order for it to work.</p>
        {
          this.state.members.map((item, index) => {
            return (
              index <= 10 ?
              <div key={index} style={boxStyle}>
                <h3>{item.username}</h3>
                <p>{item.mail}</p>
                <p>{item.address}</p>
              </div>
            :
            null
          )})
        }
      </div>
    )
  }
}
