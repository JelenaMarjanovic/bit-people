import React from 'react';

import UserCard from './UserCard';
import UserItem from './UserItem';
import Loader from '../common/loader/Loader';

const UsersList = (props) => {

    const { users, cardType, loading } = props;
    const userCards = users.map((user, index) => <UserCard key={index} singleUser={user} />);
    const userItems = users.map((user, index) => <UserItem key={index} singleUser={user} />);

    return (
        <div className="row">
            <ul className="collection">
                {(loading) ? <Loader /> : (cardType ? userCards : userItems)}
            </ul>
        </div>
    )
}

export default UsersList;