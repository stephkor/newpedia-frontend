import React from 'react';
import Modal from '@material-ui/core/Modal'
import styled from 'styled-components'
import KakaoLogin from "react-kakao-login";
import GoogleLogin from 'react-google-login';
import google from 'btn_google_signin_light_normal_web@2x.png'
import NickNameModal from "Components/NickName";



class LoginModal extends React.Component {
  constructor(){
    super()
    this.state = {
      open: false,
      data: 'kakao',
      token: "",
      nickname: "",
      nicknamemodal : <NickNameModal/>
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
    document.cookie = 'cookie2=value2; SameSite=None; Secure';
    const {data} = this.state;
    this.setState({
      data: res,
      token: res.access_token
    });
    fetch('http://3.34.131.76:8000/account/sign-in/kakao', {
      //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다. 
      method: 'POST',
      headers: {
        Authorization: res.response.access_token,
        //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다. 
      },
    },[])
      .then((res) => res.json())
      .then((res) => localStorage.setItem('token', res.access_token))
      .then((res)=>  {this.handleClose()}
      //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
      //여기서 중요한것은 처음에 console.log(res)해서 들어오는
      //access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는
)
  };
  
 Logout = () => {
    localStorage.removeItem('token');
    document.cookie = "crossCookie=bar; SameSite=None; Secure"
     .then(this.setState({
        token: "",
        nickname: "",
      })
     )
  }


  
  render () {
  return (
    <>
      <LoginButton type="button" onClick={()=>this.handleOpen()}
      style={{display: localStorage.getItem('token') === null ? "block" : "none"}}>로그인</LoginButton>
    <LogoutButton type="button" onClick={()=>this.Logout()}
      style={{display: localStorage.getItem('token') !== null ? "block" : "none"}}>
      로그아웃</LogoutButton>
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
              useDefaultStyle
              onSuccess={this.responseKaKao}
               />
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
