import React from 'react'
import axios from 'axios'

class PostObject extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			userId: '',
			title: '',
			body: ''
		}
	}

	changeHandler=(event) =>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	submitHandler=(event) =>{
		event.preventDefault()
		this.setState({
			userId: '',
			title: '',
			body: ''
		})
		
		axios
			.post('https://jsonplaceholder.typicode.com/posts',this.state)
			.then(
				(response) =>{
					console.log(response)
				}
			)
			.catch(
				(error) =>{
					console.log(error)
				}
			)
	}

	render() {
		const { userId, title, body} = this.state

		return (
			<form onSubmit={this.submitHandler}>
				<center>
					<h1>Object Form</h1>
				</center>
				<div className="form-group">
					<input 
						type="text" 
						className="form-control"
						value={userId}
						name="userId"
						placeholder="User Id"
						onChange={this.changeHandler}
					/>
				</div>
				<div className="form-group">
					<input 
						type="text" 
						className="form-control"
						value={title}
						name="title"
						placeholder="Title"
						onChange={this.changeHandler}
					/>
				</div>
				<div className="form-group">
					<textarea 
						type="text" 
						className="form-control"
						value={body}
						name="body"
						placeholder="Body"
						onChange={this.changeHandler}
					/>
				</div>

				<center>
					<button type="submit" className="btn-lg btn btn-primary">Post</button>
				</center>
			</form>
			
		)
	}
}

export default PostObject