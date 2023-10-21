/** @format */

import PropTypes from 'prop-types';
import './style.css';

const FeedbackOptions = ({ valueButtons, onLeaveFeedback }) => {
	const handelClickButton = {
	};
	return (
		<div className='buttons'>
			{valueButtons.map(button => (
				<button
					type='submit'
					key={button}
					
					onClick={ i=>{
						onLeaveFeedback(button);
						handelClickButton(i);}}
				>
					{button.toUpperCase()}
				</button>
			))}
		</div>
	);
};

FeedbackOptions.propTypes = {
	valueButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
	onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;