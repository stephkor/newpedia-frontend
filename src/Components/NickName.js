import React from 'react';
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'


class NickNameModal extends React.Component {
	constructor(){
		super()
		this.state = {
			open: false,
		}
	}
	
	
	handleOpen = () => {
		this.setState({
			open: true,
		})
	}
	
	handleClose = () => {
		this.setState({
			open: false,
		})
	}

	
	render () {
		return (
			<>
				<LogoutButton type="button" onClick={()=>this.handleOpen()}>
					nickname
				</LogoutButton>
				<Modal
					open={this.state.open}
					onClose={()=>this.handleClose()}
					aria-labelledby="nickname"
					aria-describedby="thisisnickname"
					style={{display: "flex", alignItems: "center", justifyContent : "center"}}
				>
					<ModalBody>
						<div>
							<p>닉네임을 입력해주세요</p>
							<span>단어를 등록/수정 할 때 사용하실 <br />닉네임을 설정 해주세요!</span>
							<input placeholder="닉네임을 입력해주세요"/>
						</div>
					</ModalBody>
				</Modal>
			</>
		)
	}
}


export default NickNameModal;

const LogoutButton = styled.button`
  border : none;
  background-color: #ffffff;
  padding: 25px;
  font-family: AppleSDGothicNeo;
  font-size: 18.5px;
  font-weight: 300;
  cursor: pointer;
`


const ModalBody = styled.div`
width: 500px;
height: 500px;
background-color: #ffffff;
border-radius: 25px;
border: 1px solid;

	div {
		display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:  20% auto;
    
    p {
    font-size: 32px;
    font-weight: 400;
    margin: 5% 0;
	}
	
	span {
	font-size: 20px;
	margin:  10%;
	text-align: center;
	}
	
	
	input {
	width: 50%;
	height: 40px;
	border: 1px solid;
	border-radius: 25px;
	padding : 0 15px ;
	}
`

