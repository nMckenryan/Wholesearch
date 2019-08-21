import React from 'react';
import animals from 'animals';


//Handles the searchbar functionality at the top of the app.

class SearchBar extends React.Component {
    state = { term: ""};

    onInputChange = e => { //Progressively updates the state with whatever's been typed.
    console.log("UPDATE" + this.state.term);
        this.setState({ term: e.target.value });
        console.log("UPDATE" + this.state.term);
    }

    naughtyWordChecker = () => {
        if(this.state.term === "pee") {
            console.log('NOTNONONON')
            this.setState({ term: "notEven"});
        }
    }

    onFormSubmit = e => { //Calls onFormSubmit to searches Youtube API 
        e.preventDefault();
        //this.setState({ term: event.target.value });
        this.naughtyWordChecker();
        if(this.state.term === "dog") {
            console.log("NO");
        }

        this.setState({ term: "cute " + animals()}); //gets a random cute animal string with the Animals API
        console.log("SUBMIT1" + this.state.term);
        this.props.onFormSubmit(this.state.term);
        console.log("SUBMIT" + this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>    
                    </div>
                    <button className="positive ui button">Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;