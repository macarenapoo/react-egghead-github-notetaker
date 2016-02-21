var React = require('react'),
    Router = require('react-router'),
    Repos = require('./Github/Repos'),
    UserProfile = require('./Github/UserProfile'),
    Notes = require('./Notes/Notes'),
    ReactFireMixin = require('reactfire'),
    Firebase = require('firebase');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Macarena Poo'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount: function(){
    this.ref = new Firebase("https://react-github-notetak.firebaseIO.com");
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function(){
    this.unbind('notes');
  },
  render: function(){
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;