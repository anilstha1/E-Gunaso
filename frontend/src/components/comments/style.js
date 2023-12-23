import styled from 'styled-components';

export const CommentContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction:column;  
  width:90%;
 margin:auto 2rem;
 margin-top:2rem;
`;


export const CommentContent = styled.div`
  flex: 1;
`;



export const CommentText = styled.p`
  margin-top: 1rem;
  margin-left:4rem;
  font-size:1.6rem;
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
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
  font-size:1.2rem;
`;
export const TimeDiv = styled.div`

`
