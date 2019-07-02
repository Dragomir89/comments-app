import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions';
import Input from './common/Input';
import CommentsList from './CommentsList';
import { getComments } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      disabledBtn: true
    }
  }

  componentDidMount() {
    this.props.getComments();
  }

  chanegeHandler = (e) => {
    
    this.setState({ [e.target.name]: e.target.value });

    e.target.value === "" || e.target.value.length > 100 ?
      this.setState({ disabledBtn: true }) : this.setState({ disabledBtn: false });
  }

  handleClick = (e) => {
    e.preventDefault();
    const { comment } = this.state;
    this.setState({ 'comment': '', disabledBtn: true });
    this.props.addComment(comment);
  }

  render () {
    return (
      <div className='container'>
        <form>
          <Input
            label='Add Comment'
            name='comment'
            changeFn={this.chanegeHandler}
            val={this.state.comment} />
          <button
            disabled={this.state.disabledBtn}
            onClick={this.handleClick}
            className='btn btn-success'>Add</button>
        </form>
        {this.props.comments.length > 0 ? <CommentsList comments={this.props.comments} /> : null}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments
  }
}

export default connect(mapStateToProps, { getComments, addComment })(App);
