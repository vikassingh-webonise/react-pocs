//CommentBox component Creation
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a Comment Box.
      </div>
    );
  }
});

// Rendering the component on DOM(creating virtual DOM)
React.render(
  <CommentBox />,
  document.getElementById('content')
);
