import styled from '@emotion/styled';

export const ProfileBlock = styled.div`
  width: 350px;
  font-size: 16px;
  border-radius: 10px;
  margin: 20px auto;
  box-shadow: 2px 2px 14px 2px #919191;
`;

export const ProfileDescription = styled.div`
  padding: 35px;
  text-align: center;
`;

export const ProfileAvatar = styled.img`
  width: 100px;
  height: 100px;
  text-align: center;
  border: 5px solid #7c73e6;
  padding: 6px;
  margin: 0 auto;
  border-radius: 50%;
`;

export const ProfileName = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
`;

export const ProfileLocation = styled.p`
  font-weight: 200;
  letter-spacing: 0.8;
`;

export const ProfileTag = styled.p`
  font-size: ${({ theme }) => theme.spacing(5)};
  padding: 10px 0;
  color: #6c6a6a;
`;

export const ProfileStats = styled.ul`
  background-color: #7c73e6;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  color: antiquewhite;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px 0;
`;

export const ProfileLabel = styled.span`
  text-align: center;
  margin-bottom: 6px;
  color: white;
  width: 80px;
`;

export const ProfileQuantity = styled.span`
  font-weight: 700;
`;
