import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import Kakao from 'kakao_login_large_wide.png';
import KakaoLogin from 'react-kakao-login'
import GoogleLogin from 'react-google-login';
import google from 'btn_google_signin_light_normal_web@2x.png'
import { GoogleLogout } from 'react-google-login';


class LoginModal extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false,
      data: 'kakao'
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose= this.handleClose.bind(this);
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




responseKaKao = (res) => {
    this.setState({
        data: res
    })
    
}

responseFail = (err) => {
    alert(err);
}


 responseGoogle = (response) => {
  console.log(response);
}
 


  render () {
    console.log(this.state.data)
  return (
    <>
    <LoginButton type="button" onClick={this.handleOpen}>
     로그인 
    </LoginButton>
    <Modal
    open={this.state.open}
    onClose={this.handleClose}
    aria-labelledby="Signin"
    aria-describedby="thisissignin"
    style={{display: "flex", alignItems: "center", justifyContent : "center"}}
    >
      <ModalBody>
        
        <div>
          <h1>로그인</h1>
          <p>로그인 후에는 단어 등록이 가능합니다</p>
          <button>
          <KakaoLogin
            jsKey= {'da1d636cd0f3a43fab28ca240132e346'} 
           onSuccess={result => this.responseKaKao(result)}
           onFailure={result =>console.log(result)}
           getProfile={true} >
            <img src={Kakao} alt="kakao" className="kakao"/>
          </KakaoLogin>
          
          </button>

            <GoogleLogin
            clientId="88627608200-djjdb4j25495k31susiojh2tjd3gv6qe.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img className="google" src={google} alt="kakao"/></button>
            )}
            />


        </div>

      </ModalBody>
</Modal>
</>
  )
  }
}


export default LoginModal;


const LoginButton = styled.button`
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

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:  8% auto;


    h1 {
      font-size: 32px;
      padding: 10%;
    }

   
    button {
      border: none;
      background: none;
      width: fit-content;
      padding-top: 5%;

        .kakao {
          width: 60%;
          margin: 0;
          padding: 0;
        }

        .google {
         width: 70%;
         height: 60px;
        }
    
    }

    }
   
  
`
