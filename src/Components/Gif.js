import React from 'react';

function Gif(props) {
	return (
		<div className='gif-row'>
			<img src={props.gifSrc.image_url} alt='' />
		</div>
	);
}

export default Gif;
