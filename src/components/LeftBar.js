import React from 'react'

export default function LeftBar(props) {
	return (
		<div className="left-bar">
							<div className="left-bar-header">
								<div className="avatar">
									<svg data-name="Layer 1" id="Layer_1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><title/><path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Z"/><path d="M25,25.41a13,13,0,0,0-13,13,1,1,0,0,0,2,0,11,11,0,1,1,22,0,1,1,0,0,0,2,0A13,13,0,0,0,25,25.41Z"/><path d="M25,23.71a7,7,0,0,0,6.81-7.2A7,7,0,0,0,25,9.3a7,7,0,0,0-6.81,7.21A7,7,0,0,0,25,23.71ZM25,11.3a5,5,0,0,1,4.81,5.21A5,5,0,0,1,25,21.71a5,5,0,0,1-4.81-5.2A5,5,0,0,1,25,11.3Z"/></svg>
								</div>
								<div className="nickname">Ваш ник</div>
								<div className="settings">
									<img onClick={props.onClickSettings}src="img/настройки.svg" width={23} height={23} alt="" />
								</div>
							</div>
							<div className="nav-buttons">
								<div className="nav-buttons-container">
									<div className="nav-button">
										<div className="button-name" onClick={props.onClickArchive}>Архив</div>
										<div className="button-icon">
											<img src="img/Архив.svg" width={20} alt="" />
										</div>
									</div>
									<div className="nav-button" onClick={props.onCreateChat}>
										<div className="button-name">Создать чат</div>
										<div className="button-icon">
											<img src="img/плюс.svg" width={20} alt="" />
										</div>
									</div>
									<div className="nav-button">
										<div className="button-name">Создать канал</div>
										<div className="button-icon">
											<img src="img/плюс.svg" width={20} alt="" />
										</div>
									</div>
									<div className="goBack" onClick={props.onClickBack}> <img height={50} width={25} src="img/left.svg" alt="left"/> </div>
								</div>
							</div>
						</div>
	)
}
