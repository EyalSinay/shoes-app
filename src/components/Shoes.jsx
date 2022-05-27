import React from "react";
import { getShoes, postShoes, putShoes, deleteShoes } from "../api/requests.js";
import ShoesProduct from "./ShoesProduct";
import CreateEditItem from "./CreateEditItem";

class Shoes extends React.Component {
    state = { data: [], didLoad: false, modify: false, toModifyId: null }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const _data = await getShoes();
        this.setState({ data: _data, didLoad: true });
    }

    getShoesById = () => {
        return this.state.data.find(item => item.id === this.state.toModifyId)
    }

    onAddClick = () => {
        this.setState({ modify: true, toModifyId: null });
    }

    onEditClick = (id) => {
        this.setState({ modify: true, toModifyId: id });
    }

    onDiscardClick = () => {
        this.setState({ modify: false });
    }

    onConfirmClick = ({ titleInput, descriptionInput }, id) => {
        const { name, description } = { titleInput, descriptionInput }
        if (id) {
            const { createdAt, shoes } = this.getShoesById(id);
            this.putItem({ name, description, createdAt, shoes }, id);
        } else {
            this.postItem({ name, description });
        }
        this.setState({modify: false, toModifyId: null});
    }

    postItem = async (newShoes) => {
        const response = await postShoes(newShoes);
        console.log(response);
        this.getData();
    }

    putItem = async (updateShoes, id) => {
        const response = await putShoes(updateShoes, id);
        console.log(response);
        this.getData();
    }

    deleteItem = async (id) => {
        this.setState({ didLoad: false });
        const _data = await deleteShoes(id);
        console.log(_data);
        this.getData();
    }

    render() {
        return (
            <>
                {this.state.modify && <CreateEditItem toModifyElement={this.getShoesById} onDiscardClick={this.onDiscardClick} onConfirmClick={this.onConfirmClick} />}
                {
                    this.state.didLoad
                        ?
                        <div>
                            <div id="add-btn" className="btn" onClick={this.onAddClick}></div>
                            {this.state.data.map(shoes => <ShoesProduct
                                key={shoes.id} {...shoes}
                                onTrashClick={this.deleteItem}
                                onEditClick={this.onEditClick}
                            />)}
                        </div>
                        :
                        <h1>Loading...</h1>
                }
            </>
        );
    }
}

export default Shoes;