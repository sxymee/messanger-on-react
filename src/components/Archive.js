import React from 'react'
import ChatWindow from './ChatWindow'

export default function Archive(props) {

	const [archived, setArchived] = React.useState(true)
	
	return (
		<div> 
			{props.archivedChats.length > 0 ? 
			props.archivedChats.map((obj, index) => (
				<ChatWindow 
					key={index}
					id={obj.id}
					userName={obj.userName}
					userMessage={obj.userMessage}
					userImg={obj.userImg}
					archived = { archived }
					onClickDelete = {props.onClickDelete}
				/>)) : <div className="clear-archive">
				<div className='smile'>^_^</div>
					<div>Архив пуст</div>
			</div>
		  }
			
			
		</div>
	)
}
