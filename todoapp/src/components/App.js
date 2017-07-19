import React from 'react'

class App extends React.Component {
    render() {
        return ( 
            <div className="container-fluid col-md-4 col-md-offset-4">
        <center className="row">
            <h3>TO DO LIST APP</h3>
            <br/>
            <form>
                <input id="input" type="text" />
                <input type="submit" style="margin-left: -5px"/>
            </form>
        </center>
        <br/>
        <div className="list-group">
            <div className="list-group-item row">
                <span className="pull-left pointer">+</span>
                <span style="margin: 0px 16px;">I want to go to banana island</span>
                <span className="pull-right pointer">-</span>
            </div>

        </div>
    </div>
        )
    }
}

export default App