
export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <li className="item">
        <span className="status">{isOnline}*</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <span className="name">{name}</span>
      </li>
    );
}