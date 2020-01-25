import React from 'react';
import notebook from "../styles/assets/notebook-icon.svg"
import calendar from "../styles/assets/calendar-icon.svg"
import suitcase from "../styles/assets/suitcase-icon.svg"
import clipboard from "../styles/assets/clipboard-icon.svg"
import typewriter from "../styles/assets/typewriter-icon.svg"


const AuthPage = () => {

	return (
<section class="wrapper">
		<div class="left">
			<div class="header-icon">
				<img src={notebook}/>
			</div>			
			<div class="header-login">
				<h2>Login</h2>	
			</div>
			<div class="form-description">
				<p>
					Welcome back! Please login to your account to access the full version.
				</p>
			</div>

			<form class="form-login" action="#" method="GET" autocomplete="off">

				<label for="username" class="hidden-labels">Username</label>
				<input type="text" name="username" id="username" class="login-input" placeholder="Username"/>
				
				<label for="password" class="hidden-labels">Password</label>
				<input type="password" name="password" class="login-input" id="password" placeholder="Password"/>
	
				<button class="login-btn">LOGIN</button>
			</form>
		</div>
		<div class="right">

			<div class="signup-header">
				<h2>Sign up</h2>
			</div>

			<div class="form-description">
				<p>Create an account to access the full version with all features</p>
			</div>

			<form class="signup-form" action="#" method="GET" autocomplete="off">
				<div class="dob">
					<div class="side-icons">
						<img src={calendar}/>
					</div>
	
					<div class="input-wrap">
						<label for="dob" class="shown-labels">What is your date of birth?</label>
						<input type="text" name="dob" class="login-input" id="dob" placeholder="DD/MM/YY"/>
					</div>	
				</div>
				<div class="occupation">
					<div class="side-icons">
						<img src={suitcase}/>
					</div>
					<div class="input-wrap">
						<label for="occupation" class="shown-labels">What is your occupation</label>
						<input type="text" name="occupation" class="login-input" id="occupation" placeholder="Enter your occupaton"/>
					</div>
				</div>
				<div class="sin">
					<div class="side-icons">
						<img src={clipboard}/>
					</div>
					<div class="input-wrap">
						<label for="sin" class="shown-labels">What is your social security number</label>
						<input type="text" name="sin" class="login-input" id="sin" placeholder="XXX-XXX-XXX"/>
					</div>
				</div>
				<div class="income-tn">
					<div class="side-icons">
						<img src={typewriter}/>
					</div>
					<div class="input-wrap">
						<label for="income-tn" class="shown-labels">What is your income tax number?</label>
						<input type="text" name="income-tn" class="login-input" id="income-tn" placeholder="Enter your tax number"/>
					</div>
				</div>

				<button class="next-btn">NEXT</button>	
			</form>	
		</div>
	</section>

	)
}

export default AuthPage;