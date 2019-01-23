import React, { Component, PureComponent} from 'react';

class Books extends PureComponent {
	render() {
		return (
			<ul>
                {
                    this.props.books.map((book, index) => <li key={index}>{book}</li>)
                }
            </ul>
		)
	}
}

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
            
            return {
                books: preState.books.concat(['今日简史'])
            }
        })
    }

    render() {
        const books = this.state.books
		console.log(books)
        return (
            <div>
                <button onClick={this.addBook}>添加</button>
				<Books books={books} />
            </div>
        )
    }
}

export default Main