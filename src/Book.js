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
                        name: '那么慢，那么美hahahahahhaha',
                        isRead: false
                    },
                    {
                        id: 1,
                        name: 'you dont know js 你不知道的js',
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

    changeBookReadStatus2 = (id) => {
        const book = this.state.book
        const index = book.books.findIndex(book => id === book.id)

        const newBookState = Object.assign(
            {}, 
            book, 
            {
                books: [
                    ...book.books.slice(0, index), 
                    Object.assign({}, book.books[index], { isRead: !book.books[index].isRead}),
                    ...book.books.slice(index+1)]
            }
        )

        this.setState({
            book: newBookState
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