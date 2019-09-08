import React from 'react';
import animals from 'animals';

//Handles the searchbar functionality at the top of the app.

class SearchBar extends React.Component {
    state = { term: ""};

    onInputChange = e => { //Progressively updates the state with whatever's been typed.
         this.setState({ term: e.target.value });
    }

    onFormSubmit = e => { //Calls onFormSubmit to searches Youtube API 
        e.preventDefault();
        //this.setState({ term: event.target.value });

        this.setState({ term: "cute " + animals()}, () => { //Hijacks search term and replaces with search for cute animals. 
            this.props.onFormSubmit(this.state.term); //Updates other components.
        });
        console.log("TEXT SUBMITTED" + this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label>Video Search</label>
                    <div className="field">
                        <div className="ui action input"> 
                            <input id="SEARCH" type="text" value={this.state.term} onChange={this.onInputChange}/>
                            <button className="positive ui button">Search</button>    
                        </div>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SearchBar;