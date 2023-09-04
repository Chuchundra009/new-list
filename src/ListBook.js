import { Component } from "react";
import book from './free-icon.png';

export class ListBook extends Component {
    state = {
        userInput: "",
        groceryList:[]
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if(input === '') {
            alert("Напиши что-нибудь")
        }
        else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList: listArray, userInput:''})
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray=[];
        this.setState({groceryList: listArray});
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="Что хочешь почитать?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button className="btn-add" onClick={() => this.addItem(this.state.userInput)}>ДОБАВИТЬ</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={book} width='40px' alt="icon book"/>{item}</li>
                        ))}
                    </ul>
                    <div className="container">
                        <button className="btn-del" onClick={() => this.deleteItem()}>УДАЛИТЬ</button>
                    </div>
                </form>
            </div>
        )
    }
}