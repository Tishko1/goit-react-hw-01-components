import propTypes from 'prop-types';
import {
  FriendItem,
  FriendAvatar,
  FriendIsOnline,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendIsOnline bul={isOnline}>{isOnline}</FriendIsOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friendItem: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
  }),
};
