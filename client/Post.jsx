Post = React.createClass({
  propTypes: {
    user: React.PropTypes.string,
    text: React.PropTypes.string,
    date: React.PropTypes.number
  },
  render() {
    return (
      <div className="comment">
        <a className="avatar">
          <i className="child icon"></i>
        </a>
        <div className="content">
          <a className="author">{this.props.user}</a>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">
            <p>{this.props.text}</p>
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    );
  }
});