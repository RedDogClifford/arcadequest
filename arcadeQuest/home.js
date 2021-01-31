import React from "react"; 
import {Link} from 'react-router-dom';

function home(){

    return (
    
        <div class="base">
            <div class="questionBut">
                <Link to="/questions"><div id="question">Questions</div></Link>
            </div>
    
        </div>

    );
}

export default home;