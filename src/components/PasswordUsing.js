import React from 'react'

export default function(){
    return (
        <div className="inputBox">
            <input type="password" name="" placeholder="Enter Password" id="password"/>
            <div id="toggle" onClick="showHide();"></div>
            <script type="text/javascript">
                const password = document.getElementById('password');
                const toggle = document.getElementById('toggle');

                function showHide(){
                    if (password.type === 'password'){
                        password.setAttribute('type', 'text');
                        toggle.classList.add('hide')
                    }
                    else {
                        password.setAttribute('type', 'password');
                        toggle.classList.remove(hide)
                    }
                }
            </script>
        </div>
    )
}