import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.Component {
    render(){
        return (
            <form>
                <input id="input" type="text" />
                <input type="submit" style="margin-left: -5px"/>
            </form>
        )
    }
}

export default Search