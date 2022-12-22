import React from 'react'

export default function AddUser(props) {

	const [user, setUser] = React.useState({})

	const onChangeUserName = (event) => {
		setUser({
			id: "",
			userName: event.target.value,
			userMessage: "",
			userImg: "img/ava1.webp",
		})
	}

	const onAccept = () => {
		if (user.userName) {props.onAdd(user)} else {
			alert("Заполните поля")
		}
	}
	return (
		<div className="add-chat">
			<div className="add-chat__header"><h2>Добавить чат</h2></div>
			<div className="add-chat-container">
				<div className="tel-number add-chat-elem">
					<p>Номер телефона</p>
					<input type="text" className="tel-number-input input" placeholder='Номер'/>
				</div>
				<div className="name-user add-chat-elem">
					<p>Имя</p>
					<input type="text" className="userName-input input" placeholder='Имя' onChange={onChangeUserName}/>
				</div>
				<button className="add-user" onClick={onAccept}>ДОБАВИТЬ</button>
			</div>
		</div>
	)
}
