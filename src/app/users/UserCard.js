import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
    const { singleUser } = props;

    const genderClass = singleUser.getGender();

    return (
        <div className="col s12 m7 xl4">
            <div className = {genderClass}>
                <div className="card-image">
                    <img src={singleUser.getPicture()} alt={singleUser.getFirstName()} />
                    <span className="card-title">
                        {singleUser.getFirstName()}
                    </span>
                </div>
                <div className="card-content">
                    <p>{singleUser.getEmail()}</p>
                    <p>Birth date: {singleUser.getDob()}</p>
                </div>
            </div>
        </div>
    )
}

UserCard.propTypes = {
    singleUser: PropTypes.object.isRequired
}

UserCard.defaultProps = {
    singleUser: {}
}

export default UserCard;