import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListGeneral } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendListGeneral>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </FriendListGeneral>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
