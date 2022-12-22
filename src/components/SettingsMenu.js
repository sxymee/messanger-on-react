import React from 'react'

export default function SettingsMenu(props) {
	return (
		<div className="settings-menu">	
							<div className="settings-menu__container">
								<div className="settings-header"> 
								<h4>Настройки</h4>
								<div className="leave-settings">
									<img onClick={props.onClickBack} src="img/back.svg" alt="" />
								</div>
								</div>
								<div className="settings-section">
									<ul className="settings-items">
										<li className="setting-item type">
											<span>Фон: </span> <div className="color light" onClick={props.onChageColorLight}></div>
											<div className="color dark" onClick={props.onChageColorDark}></div>
										</li>
									</ul>
								</div>
							</div>
						</div>
	)
}
