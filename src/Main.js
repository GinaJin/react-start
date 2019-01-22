import React, { Component } from 'react';

class Main extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            books: [
                'you dont know js',
                '那么慢，那么美'
            ]
        }
    }

    addBook = () => {
        this.setState(preState => {
            books: preState.books.concat(['今日简史'])
        })
    }

    render() {
        const books = this.state.books
        return (
            <div>
                <button onClick={this.addBook}>添加</button>
                <ul>
                    {
                        books.map(book => <li>{book}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Main