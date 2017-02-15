import React from 'react';
import '../css/ChampionSearch.scss';

const ChampionSearch = React.createClass({
     propTypes: {
        trouverChampion: React.PropTypes.func.isRequired,
    },

    getInitialState: () => {
        return{
            nameValue: '',
        };
    },

    handleChange(e) {
        e.preventDefault();
        this.setState({
            nameValue: e.target.value,
        });
        let recherche = this.state.nameValue;
        this.props.trouverChampion(recherche);
    },
    handleFocus(e) {
        e.preventDefault();
        this.setState({
            nameValue: '',
        });
    },
    handleBlur(e) {
        e.preventDefault();
        this.setState({
            nameValue: '',
        });
        this.props.trouverChampion('');
    },
    render() {
        return(
            <form id="search-champion"
            onKeyUp={this.handleChange}>
                <input
                    type="text"
                    name=""
                    placeholder="Champion Search"
                    value={this.state.nameValue}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    required />
            </form>
        );
    },
    componentWillMount() {
        this.setState({
            nameValue: ['Champion Search'],
        });
    },

});

module.exports = ChampionSearch;
