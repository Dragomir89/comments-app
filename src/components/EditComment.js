import React, { Component } from 'react'
import Input from './common/Input';
import { connect } from 'react-redux';
import { editComment } from '../actions';

class EditComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            disabledBtn: false
        }
    }

    chanegeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });

        e.target.value === "" || e.target.value.length > 100 ?
            this.setState({ disabledBtn: true }) : this.setState({ disabledBtn: false });
    }

    editHandler = (e) => {
        e.preventDefault();
        const { id } = this.props;
        const { content } = this.state;
        this.props.editComment({ id, content });
    }

    render () {
        return (
            <div>
                <Input
                    label='Edit comment'
                    name='content'
                    changeFn={this.chanegeHandler}
                    val={this.state.content}
                />
                <button onClick={this.editHandler} disabled={this.state.disabledBtn} className="btn btn-success">
                    Save
                </button>

            </div>
        )
    }
};

export default connect(null, { editComment })(EditComment)