import React from 'react';
import avatar from '../static/images/avatar.jpg';
import { AppBar, Toolbar, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Typed from 'react-typed';

const useStyles = makeStyles(theme => ({
	title: {
		color: "midnightblue"
	},
	subtitle: {
		color: "midnightblue",
		marginBottom: "3rem"
	}
}))

const Header = () => {
	const classes = useStyles()
	return (
		<div style={{width: '100%', margin: 'auto'}}>
			<AppBar position="static">
				<Toolbar>
					<Box display='flex' flexGrow={1}>
						<a className="header-text" href="https://tlmei.github.io">Troy Mei</a>
					</Box>
					<a className="header-link" href="https://github.com/tlmei" target="_blank" rel="noopener noreferrer">GitHub</a>
					<a className="header-link" href="https://www.linkedin.com/in/troymei/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
					<a className="header-link" href="https://www.messenger.com/t/tmei0" target="_blank" rel="noopener noreferrer">Messenger</a>
				</Toolbar>
			</AppBar>

			<Box>
				<img 
					src={avatar}
					alt="avatar"
					className="avatar-img"
				/>

				<Typography className={classes.title} align="center" variant="h4">
					<Typed strings={["Hey, I'm Troy"]} typeSpeed={40}/>
				</Typography>
				<br/>
				<Typography className={classes.subtitle} align="center" variant="h5">
					<Typed 
						strings={["Undergraduate Senior Computer Science Student",
											"Check out some work I've done below!",
											"Feel free to message me on messenger",
											"Caffeine + Lofi"]}
						typeSpeed={40}
						backSpeed={60}
						loop
					/>
				</Typography>
			</Box>
			
		</div>
	)
};
  
export default Header;