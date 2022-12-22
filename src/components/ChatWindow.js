import React from 'react'

export default function ChatWindow({id, userName, userMessage, userImg, onActivate, archived, onAddToArchive, onClickDelete, onClickChat}) {

	const activateChat = () => {
		onActivate({userName, userMessage, userImg, onClickChat})
	}

	const deleteWindow = () => {
		onAddToArchive({id, userName, userMessage, userImg})
	}

	const deleteInArchive = () => {
		onClickDelete({id, userName, userMessage, userImg})
	}


	return (
			<div className="chat-window" onClick={activateChat}>
				<div className="avatar-message"><img src={userImg} alt="avatar"/></div>
				<div className="chat-info">
					<div className="nickname-message">{userName}</div>
					<div className="chat-preview">{userMessage}</div>
				</div>
				<div className="delete-chat" >
						{archived ? <img src="img/cancel.svg" width={25} alt="" onClick={ deleteInArchive }/> : <img src="img/cart.svg" width={25} alt="" onClick={(event) => {event.stopPropagation(); deleteWindow()}}/>}
				</div>
			</div>
	)
}
