import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

import resume from '../static/docs/resume.pdf';
import ModalCard from './modalcard';

class AboutPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		// Experience Tab
		if(this.state.activeTab === 1){
			return(
				<div className="projects-grid">
					{/* BNY Mellon */}
					<ModalCard
					background="https://www.e-idsolutions.com/wp-content/uploads/2016/08/BNY-Mellon-Logo.jpg"
					shortDescription="Software Engineering Intern"
					modalTitle= "Software Engineering Intern, Summer 2020 @ NYC/Remote"
					description="I supported the backend development of a pricing engine that leverages modelling and predictive 
								 analytics to validate new buisness pricing and repricing rates, and provide visibility into pricing
								 decision implications. This involved building and documenting the API, implementing authorization, 
								 mapping and translating pricing calculations, and working on the frontend when needed. I also collaborated
								 with my team to design and implement a caching mechanism that sped up the retrieval of user data."
					/>

					{/* Payfone */}
					<ModalCard
					background="https://www.payfone.com/wp-content/uploads/2020/07/Prove_Announcement4.png"
					shortDescription="Software Engineering Intern"
					modalTitle= "Software Engineering Intern, Summer 2020 @ NYC"
					description="something"
					/>
				</div>
			)
		}
		// Projects Tab
		else if(this.state.activeTab === 0) {
			return(
				<div className="projects-grid">
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color:'#fff', height: '176px', background: 'url(https://pmcvariety.files.wordpress.com/2015/08/facebook-messenger-logo.jpg) center / cover'}}>
						</CardTitle>
						<CardText>Dummy text</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>CodePen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
					</Card>
				</div>
			)
		}
	}

	render() {
		return(
			<div>
				<div>
					<p>I'm a senior undergraduate at NYU studying computer science. I enjoy working on challenging problems while learning new technologies and refining my hard skills, and I'm always open to new 
					opportunities. Check out more of what I've done in my <a href = {resume} target = "_blank">resume</a>!
					</p>
				</div>

				<div className="category-tabs">
					<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
						<Tab>Projects</Tab>
						<Tab>Experience</Tab>
					</Tabs>
				</div>

				
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
				
			</div>
		)
	}
}


export default AboutPage;