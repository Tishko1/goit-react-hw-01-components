import propTypes from 'prop-types';
import {
  FriendItem,
  FriendAvatar,
  FriendIsOnline,
  FriendIsOffline,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      {isOnline ? (
        <FriendIsOnline>{isOnline}</FriendIsOnline>
      ) : (
        <FriendIsOffline>{isOnline}</FriendIsOffline>
      )}
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
