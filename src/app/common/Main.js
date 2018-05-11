import React from 'react';
import PropTypes from 'prop-types';

import UsersList from '../users/UsersList';
import Search from './Search';

const Main = (props) => {
    const { data, cardType, changeValue, loading } = props;

    return (
        <div className="container">
            <div className="row">
                {loading ? <div /> : <Search changeValue={changeValue} />}
                <UsersList users={data} cardType={cardType} loading={loading} />
            </div>
        </div>
    )
}

Main.propTypes = {
    data: PropTypes.array.isRequired
}

export default Main;