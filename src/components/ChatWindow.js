import React from 'react'

export default function ChatWindow(props) {

	const goToChat = () => {
		props.onClickChat();
		props.chatActivate({id: props.id, userName: props.userName, userMessage: props.userMessage, userImg: props.userImg})
	}

	const deleteWindow = () => {
		props.onAddToArchive({id: props.id, userName: props.userName, userMessage: props.userMessage, userImg: props.userImg})
	}

	const deleteInArchive = () => {
		props.onClickDelete({id: props.id, userName: props.userName, userMessage: props.userMessage, userImg: props.userImg})
	}


	return (
			<div className="chat-window"  onClick={goToChat}>
				<div className="avatar-message"><img src={props.userImg} alt="avatar"/></div>
				<div className="chat-info">
					<div className="nickname-message">{props.userName}</div>
					<div className="chat-preview">{props.userMessage}</div>
				</div>
				<div className="delete-chat" >
						{props.archived ? <img src="img/cancel.svg" width={25} alt="" onClick={ deleteInArchive }/> : <img src="img/cart.svg" width={25} alt="" onClick={(event) => {event.stopPropagation(); deleteWindow()}}/>}
				</div>
			</div>
	)
}
