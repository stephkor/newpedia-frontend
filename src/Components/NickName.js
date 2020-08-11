import React from 'react';
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'


class NickName extends React.Component {
	constructor(){
		super()
		this.state = {
			open: false,
		}
	}
	

	
	render () {
		return (
			<>
				<Modal
					open={this.state.open}
					onClose={()=>this.handleClose()}
					aria-labelledby="Signin"
					aria-describedby="thisissignin"
					style={{display: "flex", alignItems: "center", justifyContent : "center"}}
				>
					<ModalBody>
						<div></div>
					</ModalBody>
				</Modal>
			</>
		)
	}
}


export default NickNameModal;


