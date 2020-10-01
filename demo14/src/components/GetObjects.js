import React from 'react'
import axios from 'axios'

class GetObjects extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			objects: [],
			errorMsg: ''
		}
	}

	componentDidMount() {

		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(
				(response) =>{
					console.log(response)
					this.setState({objects: response.data})
				}				
			)
			.catch(
				(error) =>{
					console.log(error)
					this.setState({errorMsg: 'Error while Retriving Data'})
				}
			)
			
	}

	render() {
		var {objects,errorMsg} = this.state
		
		return (
			<div>
				<center>
					<h1>List of Objects</h1>
					<br/>
				</center>
				{
					objects.length? objects.map(
						(object) => 
						<div key={object.id}>
							<h4>{object.id}. {object.title}</h4>
							<p className="lead">{object.body}</p>
							<br/>
						</div>
					):null
				}
				<div className="alert-warning lead">{errorMsg}</div>
			</div>
		)
	}
}

export default GetObjects