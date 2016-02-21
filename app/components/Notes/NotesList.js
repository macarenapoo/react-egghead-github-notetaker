var React = require('react');

var NotesList = React.createClass({
  render: function(){
    var notes = this.props.notes.map(function(note, index){
      return <li className="list-group-item" key={index}> {note['.value']} </li>

    });
    console.log(this.props.notes);
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});

module.exports = NotesList;
