import React from 'react';

export default class User extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    debugger
    this.props.fetchSingleUser(this.props.match.params.username)
  }

  render(){
    debugger
    return (
      <div className="user-div">
        Inside User Div
      </div>
    );
  }
}