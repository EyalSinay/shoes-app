import React from "react";
import AddDeleteBtn from './AddDeleteBtn';

class CreateEditItem extends React.Component {
    state = { titleInput: "", descriptionInput: "", id: 0 }

    componentDidMount(){
        const toModifyElement = this.props.toModifyElement();
        if (toModifyElement){
            this.setState({titleInput: toModifyElement.name, descriptionInput: toModifyElement.description, id: toModifyElement.id })
        }
    }

    discard = () => {
        this.setState({ titleInput: "", descriptionInput: "" });
        this.props.onDiscardClick();
    }


    render() {
        return (
            <div className="create-edit-item-main-container">
                <div className="create-edit-item-sub-container">
                    <div className="input-text-container">
                        <label htmlFor="title-input">Title:</label>
                        <input type="text" id="title-input" onChange={(e) => this.setState({ titleInput: e.target.value })} value={this.state.titleInput} />
                    </div>
                    <div className="input-text-container">
                        <label htmlFor="description-input">Description:</label>
                        <input type="text" id="description-input" onChange={(e) => this.setState({ descriptionInput: e.target.value })} value={this.state.descriptionInput} />
                    </div>
                    <AddDeleteBtn newState={{...this.state}} onTrashClick={this.discard} type={"message"} onConfirmClick={this.props.onConfirmClick} />
                </div>
            </div >
        );
    }
}

export default CreateEditItem;