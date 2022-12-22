import React from 'react';
import axios from 'axios';
import ChatWindow from "./components/ChatWindow";
import LeftBar from "./components/LeftBar";
import LeftBarMini from "./components/LeftBarMini";
import Chat from './components/Chat';
import SettingsMenu from './components/SettingsMenu';
import Archive from './components/Archive';
import AddUser from './components/AddUser';
import Popup from './components/Popup';

function App() {
	const [bar, setBar] = React.useState(true);

	const [rightElem, setRightElem] = React.useState(true)

	const [users, setUsers] = React.useState([]);

	const [inputValue, setInputValue] = React.useState('');

	const [archivedChats, setArchivedChats] = React.useState([])

	const [addUser, setAddUser] = React.useState(false)

	const [archive, setArchive] = React.useState(false)

	const [activeUser, setActiveUser] = React.useState()

	const [settings, setSettings] = React.useState(false)

	const [popup, setPopup] = React.useState(false)
	

	const [bg, setBG] = React.useState()

	React.useEffect(() => {
		axios.get('https://639aea76d514150197441c4f.mockapi.io/users')
			.then((res) => setUsers(res.data))
		axios.get('https://639aea76d514150197441c4f.mockapi.io/Archive')
			.then((res) => setArchivedChats(res.data))
	}, [])

	const onAddToArchive = (obj) => {
			axios.post('https://639aea76d514150197441c4f.mockapi.io/Archive', obj);
			setArchivedChats((archivedChats) => [...archivedChats, obj]);
			axios.delete(`https://639aea76d514150197441c4f.mockapi.io/users/${obj.id}`);
			setUsers((user) => user.filter(user => user.id !== obj.id))
	}


	const onActivateChat = (obj) => {
		setActiveUser(
			{
				userName: obj.userName,
				userMessage: obj.userMessage,
				userImg: obj.userImg
			}
		);
		console.log(activeUser)
	}
	
	const onChangeInput = (event) => {
		setInputValue(event.target.value)
	}

	const onUseCreateChat = () => {
		setAddUser(!addUser)
	}

	const onAddUser = (obj) => {
		axios.post('https://639aea76d514150197441c4f.mockapi.io/users', obj);
		setUsers((users) => [...users, obj])
		setAddUser(!addUser)
		setTimeout(() => {window.location.reload();}, 200)
	}

	const onDeleteInArchive = (obj) => {
		axios.delete(`https://639aea76d514150197441c4f.mockapi.io/Archive/${obj.id}`);
		setArchivedChats((archivedChats) => archivedChats.filter(archivedChats => archivedChats.id !== obj.id))
	}

  return (
    <div className="App" onClick={() => {setPopup(false)}}>
      <div className="wrapper" style={{backgroundColor: bg}}>
				<div className="chat-container">
					<div className="chat-wrapper">
						{settings ? <SettingsMenu 
							onClickBack = {() => setSettings(false)}
							onChageColorDark = {() => setBG('#666')}
							onChageColorLight = {() => setBG('#DEE9E7')}
						/> : bar ? <LeftBarMini onClickBurger = {() => setBar(false)}/> : <LeftBar 
						onClickBack = {() => setBar(true)}
						onClickSettings = {() => setSettings(true)}
						onClickArchive = {() => setArchive(!archive)}
						onCreateChat = {() => onUseCreateChat()}
						/>}
						
						<div className="right-bar">
						{addUser && <AddUser 
						onAdd = {(obj) => onAddUser(obj)}
						/>}
							<div className="right-bar-header">
								<h2>{archive ? 'Архив' : inputValue ? `Поиск по: "${inputValue}"` : 'Чат'}</h2>
								<div className="search">
									<input onChange={onChangeInput} value={inputValue} type="text" placeholder='Введите текст'/>
								</div>
								<img onClick={() => setInputValue('')} src="img/cancel.svg" alt="" />
							</div>
							<div className="chat-windows-wrapper">
								{archive ? <Archive 
									archivedChats = {archivedChats}
									onClickDelete = {(obj) => onDeleteInArchive(obj)}
								/> : <div className="chat-windows">
								{rightElem ? users.filter((user) => user.userName.toString().toLowerCase().includes(inputValue.toString().toLowerCase())).map((obj, index) => (
										<ChatWindow 
										key={index}
										id={obj.id}
										userName={obj.userName}
										userMessage={obj.userMessage}
										userImg={obj.userImg}
										onAddToArchive = {(obj) => onAddToArchive(obj)}
										onClickChat = {() => setRightElem(false)}
										chatActivate = {(obj) => onActivateChat(obj)}
										/>
										)) : <Chat
										onClickBack = {() => setRightElem(true)}
										user = {activeUser}
										onOptions = {() => setPopup(!popup)}
										popup = {popup}
										 />
								} 
								</div>}
							</div> 
						</div>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
