import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../logo.svg';
export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
				<Link to='/'>
					<img src={logo} alt='store' className='navbar-brand' />
				</Link>
				<ul className='navbar-nav align-items-center'>
					<li className='nav-item ms-5'>
						<Link to='/' className='nav-link'>
							products
						</Link>
					</li>
				</ul>
				<Link to='/cart' className='ms-auto'>
					<ButtonContainer>
						<span className='me-2'>
							<i className='fas fa-cart-plus'>my cart</i>
						</span>
					</ButtonContainer>
				</Link>
			</nav>
		);
	}
}
