import React from "react";

class AddDeleteBtn extends React.Component {
    state = {}

    onTrashClick = () => {
        if (this.props.type === "product") {
            this.props.onTrashClick(this.props.id)
        } else {
            this.props.onTrashClick();
        }
    }

    onConfirmClick = () => {
        if (this.props.type === "product") {
            this.props.onEditClick();
        } else {
            if (this.props.newState.id) {
                this.props.onConfirmClick(this.props.newState, this.props.newState.id);
            } else {
                this.props.onConfirmClick(this.props.newState, false);
            }
        }
    }


    render() {
        return (
            <div className="btn-container">
                <div id="delete-btn" className="btn" onClick={this.onTrashClick}></div>
                <div id="edit-btn" className="btn" onClick={this.onConfirmClick}></div>
            </div>
        );
    }
}

export default AddDeleteBtn;