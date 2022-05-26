import React from "react";
import AddDeleteBtn from './AddDeleteBtn';

class ShoesProduct extends React.Component {
    state = { }

    onEditClick = () => {
        this.props.onEditClick(this.props.id);
    }

    render() {
        return (
                <div className="shoes-product-container">
                    <AddDeleteBtn id={this.props.id} onTrashClick={this.props.onTrashClick} type={"product"} onEditClick={this.onEditClick}/>
                    <img src={this.props.shoes} alt={this.props.name} />
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </div>
        );
    }
}

export default ShoesProduct;