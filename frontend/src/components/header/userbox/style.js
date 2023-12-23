import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  padding: 0.5rem;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1.2rem;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;

export const LogoutButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: .8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size:1.2rem;

  &:hover {
    background-color: #c82333;
  }
`;


export const WrapperDiv = styled.div`
display: flex;
align-items:center;
gap:2rem;

`


export const UserBoxDiv = styled.div``

export const AddPostDiv = styled.div``

export const IconDiv = styled.div`
font-size:3rem;
cursor: pointer;
a{
    color:${props => props.theme.text};

}
&:hover{
    scale:1.1;
    transition: all .4s ease; 
}

`
