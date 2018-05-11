import React from 'react';

const UserItem = (props) => {
    const { singleUser } = props;

    const genderClass = singleUser.getGender();

    return (
        <li className={`collection-item avatar ${genderClass}`}>
            <img className="circle" src={singleUser.getPicture()} alt={singleUser.getFirstName()} />
            <div>
                <p>{singleUser.getFullName()}</p>
                <p> <i className="tiny material-icons">email</i> email: {singleUser.getEmail()}</p>
                <p> <i className="tiny material-icons">cake</i> {singleUser.getDob()}</p>
            </div>
        </li>
    )
}

export default UserItem;