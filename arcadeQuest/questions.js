import React, { useState } from "react";
import {Link} from 'react-router-dom';

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = { username: '' };
    }
     
    handleChange = event => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <form>
                        <div class="base">
                            <label htmlFor="username" id="name">What's your name?</label>
                            <input 
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            />
                        </div>
                    </form>
                    <Link to={{ pathname: "/result", data: this.state.username }}>Submit</Link>
                </div>
            </React.Fragment>
    
        );
    }
}

export default Questions;