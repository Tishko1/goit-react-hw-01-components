import styled from '@emotion/styled';

export const FriendItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 5px 25px;
  height: 100px;
  border-radius: 6px;
  box-shadow: 2px 2px 14px 2px #919191;
`;

export const FriendAvatar = styled.img`
  display: block;
  border-radius: 10px;
  margin-right: 20px;
`;

export const FriendIsOnline = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 30px;
  background-color: green;
  background-color: ${props => {
    return props.bul ? 'green' : 'red';
  }};
`;

export const FriendName = styled.p`
  display: flex;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;
