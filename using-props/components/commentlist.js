var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Vikas Singh">This is First Comment</Comment>
        <Comment author="Lex Luthor">This is Second Comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});