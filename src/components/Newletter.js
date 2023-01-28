import { Email, Send } from "@material-ui/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useState} from 'react';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const send = () => {
   if(message === ""){
    toast.success("Empty", {
      position: toast.POSITION.TOP_CENTER,
    });
   }else{
    toast.success("Mail added successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
   }
  };
  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };
  return (
    <Container>
      <ToastContainer/>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
      <Input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />
        <Button onClick={() => send()} >
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;