import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
// import Navbar from "./components/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore:0,
    score:0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array


      // this.state.score++;
this.setState( {friends, score: this.state.score +1 });

friends.sort(() => Math.random() - 0.5);




  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (


     
      <Wrapper>
        {/* <Navbar> */}

          {/* </Navbar> */}
        <Title>Crazy colors!! Click on a color and get a point. But don't click on the same color twice! <br></br>Score: { this.state.score} Top score: {this.state.topscore} </Title>
       

        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
