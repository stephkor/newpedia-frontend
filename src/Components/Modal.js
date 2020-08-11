import React from 'react';
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import KakaoLogin from "react-kakao-login";
import GoogleLogin from 'react-google-login';
import google from 'btn_google_signin_light_normal_web@2x.png'


class LoginModal extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false,
      data: 'kakao',
      token: "",
      googleData : 'google',
      login : "로그인"
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

  responseKaKao = (res) => {
    const { data } = this.state;
   
    this.setState({
      data: res,
      login: "로그아웃"
    });
    
    
    

    fetch('http://10.58.3.83:8000/account/sign-in/kakao', {
      //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다. 
      method: 'POST',
      headers: {
        Authorization: res.response.access_token,
        //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다. 
      },
    })
      .then((res) => res.json())
      // .then((res)=> console.log(res))
      .then((res) => localStorage.setItem('token', res.access_token))
            //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
            //여기서 중요한것은 처음에 console.log(res)해서 들어오는 
            //access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는 
            //절차가 있으므로 까먹지 말 것!
  };


  render () {
  return (
    <>
    <LoginButton type="button" onClick={()=>this.handleOpen()}>
      {this.state.login}
    </LoginButton>
    <Modal
    open={this.state.open}
    onClose={()=>this.handleClose()}
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
              jsKey={'da1d636cd0f3a43fab28ca240132e346'}
              buttonText='카카오 계정으로 로그인'
              onSuccess={(res)=>this.responseKaKao(res)}
              getProfile={true} />
            </button>
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
