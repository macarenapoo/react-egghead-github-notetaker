var React = require('react'),
    Router = require('react-router'),
    Repos = require('./Github/Repos'),
    UserProfile = require('./Github/UserProfile'),
    Notes = require('./Notes/Notes');

var Profile = React.createClass({
  getInitialState: function(){
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Macarena Poo'
      },
      repos: ['a', 'b', 'c']
    }
  },
  render: function(){
    console.log(this.state)
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
