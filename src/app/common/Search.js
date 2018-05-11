import React from 'react';

import './Search.css';

class Search extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: ""
        }
    }

    handleChange = (event) => {
        this.props.changeValue(event.target.value);

        this.setState({ value: event.target.value });
    }

    resetChange = () => {
        this.props.changeValue("");

        this.setState({ value: "" });
    }

    render() {
        return (
           
                <form>
                    <div className="input-field">
                        <input id="search" type="search"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="Search users"
                            required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons" onClick={this.resetChange}>close</i>
                    </div>
                </form>
          
        )
    }
}

export default Search;