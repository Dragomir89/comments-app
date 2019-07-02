import React, { Component } from 'react';
import EditComponent from './EditComment';
import { connect } from 'react-redux';
import { deleteComment } from '../actions';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            showEditField: props.showEditField
        }
    }
    
    chanegeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });

        e.target.value === "" || e.target.value.length > 100 ?
            this.setState({ disabledBtn: true }) : this.setState({ disabledBtn: false });
    }

    handleEditClick = (e) => {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                showEditField: !prevState.showEditField
            }
        });
    }

    handleDeleteClick = (e) => {
        e.preventDefault();
        this.props.deleteComment(this.props.id);
    }

    render () {
        const style = {
            border: '1px solid #BABABA',
            borderRadius: '5px',
            padding: '5px',
            marginBottom: '5px'
        }
        return (
            <div>
                <div style={style}>
                    <p>{this.props.content}</p>

                    {this.state.showEditField ?
                        <EditComponent id={this.props.id} content={this.props.content} /> : null}

                    <p>Added on: {new Date(this.props.date).toLocaleString()}</p>
                    <div>
                        <button
                            onClick={this.handleEditClick}
                            className="btn btn-primary btn-sm">
                            {this.state.showEditField ? 'Hide' : 'Edit'}
                        </button>
                        <button
                            onClick={this.handleDeleteClick}
                            className="btn btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default connect(null, { deleteComment })(Comment);
