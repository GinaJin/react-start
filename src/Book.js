import React, { Component } from 'react';

class Book extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            book: {
                isExpanding: false,
                books: [
                    {
                        id: 0,
                        name: '那么慢，那么美',
                        isRead: false
                    },
                    {
                        id: 1,
                        name: 'you dont know js',
                        isRead: true
                    }
                ]
            }
        }
    }

    changeBookReadStatus = (id) => {
        const book = this.state.book
        const index = book.books.findIndex(book => id === book.id)

        const isRead = book.books[index].isRead
        book.books[index].isRead = !isRead
        
        this.setState({
            book: book
        })
    }

    render() {
        const book = this.state.book
        return (
            <div>
                
                <ul>
                {
                    book.books.map(book => {
                        return (
                            <li key={book.id}>
                                {book.name}
                                <button onClick={() => this.changeBookReadStatus(book.id)}>{book.isRead ? "已读" : "未读"}</button>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Book