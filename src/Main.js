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
            preState.books.push('今日简史')
            return {
                books: preState.books
            }
        })
    }

    render() {
        const books = this.state.books
        return (
            <div>
                <button onClick={this.addBook}>添加</button>
                <ul>
                    {
                        books.map((book, index) => <li key={index}>{book}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Main