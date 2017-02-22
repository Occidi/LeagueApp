import React from 'react';
import '../css/ChampionItem.scss';

// Creating ToDoItem component
let ChampionItem = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render() {
        return(
            <div className="yop">
            <a target="!blank" href={'http://www.probuilds.net/champions/details/' + this.props.item.id}>
            <li>
                <div className="champion-item">
                    <img className="item-image" src={'https://ddragon.leagueoflegends.com/cdn/7.3.1/img/champion/' + this.props.item.image.full} alt="{this.props.item.name}"></img>
                    <span className="item-name">{this.props.item.name}</span>
                    <span className="item-title">{this.props.item.title}</span>
                    <span className="item-ressource">{this.props.item.partype}</span>
                    <span className="item-tags">{(this.props.item.tags).join('/')}</span>
                </div>
            </li>
            </a>
            </div>
        );
    }, // render
});

module.exports = ChampionItem;
