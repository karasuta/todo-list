import { Component } from 'react';
export class ToDo extends Component {
    state = {
            userInput:'',
            myList:[]
    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    addItem(input){
        if (input ===''){
            alert("Пожалуйста, введите информацию")
        } else {
            let listArray = this.state.myList;
        listArray.push(input);
        this.setState({myList: listArray, userInput:''})
        }
    }
    clear(){
        let listArray = this.state.myList;
        listArray = [];
        this.setState({myList: listArray})
    }
    crossedWord(ev){
        const li = ev.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className='container'>
                        <input type="text" 
                                placeholder="Какие планы на сегодня?"
                                onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                                value={this.state.userInput}/>
                    </div>
                    <div className='container'>
                        <button className='btn add' onClick = {()=>this.addItem(this.state.userInput)}>Добавить</button>
                    </div>
                    <ul>
                        {this.state.myList.map((task, index) =>(
                            <li onClick = {this.crossedWord} key={index}>{task}</li>
                        ))}
                    </ul>
                    <div className='container'>
                        <button className='btn del' onClick = {()=>this.clear()}>Очистить список</button>
                    </div>
                </form>
            </div>
        )
    }
}