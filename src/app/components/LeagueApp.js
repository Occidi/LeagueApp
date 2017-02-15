import React from 'react';
import './css/index.scss';
import {loadChampions} from '../libs/appService';
// Modules
import ChampionItem from './League/ChampionItem';
import ChampionSearch from './League/ChampionSearch';


// Creating LeagueApp component
let LeagueApp = React.createClass({
    getInitialState: () => {
        return{
            champions: {

            },
        };
    },
    trouverChampion(recherche) {
        function filterBy(val) {
            function iter(o, r) {
                return Object.keys(o).reduce(function(b, k) {
                    if (k.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                        r[k] = o[k];
                        return true;
                    }
                    return b;
                }, false);
            }

            let result = {};
            iter(champions, result);
            return result;
        }

        let champions = this.state.champions;
        let filteredChampions = this.state.filteredChampions;
        filteredChampions = filterBy(recherche);
        this.setState({
            filteredChampions: filteredChampions,
        });

        this.showTimedMessage('Recherche effectué');
    },
    showTimedMessage(msg) {
        this.setState({message: msg});
        setTimeout(() => this.setState({message: ''}), 500);
    },

    render() {
        let filteredChampions = this.state.filteredChampions;
        let championsItems = Object.keys(filteredChampions)
        .map(function(key, index) {
            let tags = filteredChampions[key].tags;
            return(
                <ChampionItem
                    key={index}
                    name={key}
                    tags={tags}
                    item={filteredChampions[key]} />
            );
        });

        return(
            <div id="app-list">
                <ChampionSearch
                trouverChampion={this.trouverChampion}/>
                {this.state.message &&
                <div className='success'>{this.state.message}</div>}
                <ul>
                    <div className="champion-item">
                    <img className="item-image" src="http://ddragon.leagueoflegends.com/cdn/7.2.1/img/item/2050.png"></img>
                    <span className="item-name">Name</span>
                    <span className="item-title">Title</span>
                    <span className="item-ressource">Ressource</span>
                    <span className="item-tags">Tags</span>
                </div>
                    {championsItems}
                </ul>
            </div>
        );
    }, // render
    // lifecycle functions
    componentWillMount() {
        this.setState({
            filteredChampions: {
            },
        });
    },

    componentDidMount() {
        // any grabbing of external data
        loadChampions()
            .then((champions) => champions.data)
            .then((champions) => this.setState({champions}));
    },

    componentWillUpdate() {
        // a chaque modif
    },

    componentDidUpdate() {
        // apres chaque modif
    },
});

module.exports = LeagueApp;
