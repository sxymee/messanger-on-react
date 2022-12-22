import React from 'react'
import Popup from './Popup';

export default function Chat(props) {
	return (
		<div className="chat">
			<div className="chat-header">
				<div className="avatar-message"><img src={props.user.userImg}/></div>
				<div className="userName">{props.user.userName}</div>
				<div className='chat-options' >...</div>
				<div className='goBackToChat' onClick = {props.onClickBack}><img src="img/back.svg" alt='back'/></div>
				{props.popup && <Popup />}
			</div>
			<div className="chat-messages"></div>
			<div className="enter-message">
				<div className="enter-message-form">
					<div className="enter-doc"></div>
					<input type="text" className="input-message" placeholder='Введите текст'/>
					<div className="send-message">
						<img src="img/send.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}
