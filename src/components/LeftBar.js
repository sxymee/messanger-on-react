import React from 'react'
import axios from 'axios';

export default function LeftBar(props) {


	const [fileImg, setFileImg] = React.useState({})
	const [changeNick, setChangeNick] = React.useState(false)
	const [nick, setNick] = React.useState(props.userInfo[0].userName)


	const handleImageChange = (e)  => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
			setFileImg({
				imagePreviewUrl: reader.result
			});
    }
    reader.readAsDataURL(file)
		console.log(fileImg.imagePreviewUrl)
  }

	const onClickChange = () => {
		setChangeNick(!changeNick)
	}

	const onChangeNick = (event) => {
		setNick(event.target.value)
	}

	const saveNick = () => {
		const obj = {userName: nick}
		axios.put(`https://639aea76d514150197441c4f.mockapi.io/userInfo/${props.userInfo[0].id}`, obj)
		console.log(props.userInfo[0].id)

	}

	return (
		<div className="left-bar">
							<div className="left-bar-header">
								<div className="avatar">
									<svg data-name="Layer 1" id="Layer_1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><title/><path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Z"/><path d="M25,25.41a13,13,0,0,0-13,13,1,1,0,0,0,2,0,11,11,0,1,1,22,0,1,1,0,0,0,2,0A13,13,0,0,0,25,25.41Z"/><path d="M25,23.71a7,7,0,0,0,6.81-7.2A7,7,0,0,0,25,9.3a7,7,0,0,0-6.81,7.21A7,7,0,0,0,25,23.71ZM25,11.3a5,5,0,0,1,4.81,5.21A5,5,0,0,1,25,21.71a5,5,0,0,1-4.81-5.2A5,5,0,0,1,25,11.3Z"/></svg>
								</div>
								<div className="nickname">{changeNick ? <input type="text" className='urNick' placeholder='Введите имя' onChange={onChangeNick}/> :
								 nick} {changeNick ? <img src="img/accept.svg" width={15} onClick={() => {onClickChange(); saveNick()}}/> : <img src='img/редакт.svg' onClick={onClickChange} style={{marginLeft: "15px", cursor: "pointer"}} width={15}/>} </div> 
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
									<input className="fileInput" type="file" onChange={handleImageChange}/>
									<img src={fileImg.imagePreviewUrl} width={20}/>
									<div className="goBack" onClick={props.onClickBack}> <img height={50} width={25} src="img/left.svg" alt="left"/> </div>
								</div>
							</div>
						</div>
	)
}
