import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map(item => (
        <li className={style.item} key={item.id}>
          <span className={item.isOnline ? style.online : style.offline}></span>
          <img
            className={style.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={style.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  arrayWithShape: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
