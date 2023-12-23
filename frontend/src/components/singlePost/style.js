import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  width: 90%;
  border-radius: 8px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
`;

export const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 8px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items:center;
 
`;

export const NameDateDiv = styled.div`
font-weight:500;
`

export const TimeDiv = styled.div`

`

export const UserName = styled.span`
  font-weight: bold;
  font-size:1.6rem;
`;

export const Status = styled.span`

  font-size:1.2rem;
  background-color:${(props) => (props.status === 'pending' ? 'orange' : 'green')};
  color:white;
  padding:.5rem 1rem;
`;

export const Title = styled.h2`
  margin-top: 1.2rem;
  font-weight:800;
  font-size:2rem;
`;

export const Description = styled.p`
  margin-top: .8rem;
  font-size:1.6rem;
  text-align:justify;
`;

export const ViewCommentButton = styled.div`

`;

export const IconDiv = styled.button`
font-size:1.6rem;
display: flex;
align-items:center;
justify-content:center;
cursor: pointer;
outline:none;
border:none;
background-color:${props => props.theme.background};
`

export const LikeAndComment = styled.div`

margin-top:2rem;
display: flex;
align-items:center;
gap:5rem;

`

export const LikeDiv = styled.div`
display:flex;
align-items:center;
gap:2rem;
`

export const CommentDiv = styled.div`

`