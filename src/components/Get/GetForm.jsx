import React from 'react';

function GetForm() {
    return(
        <div className="get__form">
            <form action="POST">
                <input type="text" placeholder="Name" className="input input_dark"/>
                <input type="text" placeholder="Yourmail" className="input input_dark"/>
                <textarea name="message" id="message" cols="30" rows="10" className="input input_dark text_area" placeholder="Type your message"></textarea>
                <input type="submit" value="SEND MESSAGE" className="button get__button"/>
            </form>
        </div>
    );
}
export default GetForm;