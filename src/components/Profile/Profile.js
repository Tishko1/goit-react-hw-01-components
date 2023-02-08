import PropTypes from 'prop-types';
import {
  ProfileBlock,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileLocation,
  ProfileTag,
  ProfileStats,
  ProfileItem,
  ProfileLabel,
  ProfileQuantity,
} from './Profile.styled';

export function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <ProfileBlock>
      <ProfileDescription>
        <ProfileAvatar src={avatar} alt={userName} />
        <ProfileName> {userName}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileItem>
          <ProfileLabel>Followers</ProfileLabel>
          <ProfileQuantity>{stats.followers}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Views</ProfileLabel>
          <ProfileQuantity>{stats.views}</ProfileQuantity>
        </ProfileItem>
        <ProfileItem>
          <ProfileLabel>Likes</ProfileLabel>
          <ProfileQuantity>{stats.likes}</ProfileQuantity>
        </ProfileItem>
      </ProfileStats>
    </ProfileBlock>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
