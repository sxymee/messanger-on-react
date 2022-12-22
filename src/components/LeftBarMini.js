import React from 'react'

export default function LeftBarMini(props) {
	return (
		<div className="left-bar-mini" onClick={props.onClickBurger}>
							<div className="burger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
	)
}
