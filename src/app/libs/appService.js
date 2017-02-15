const baseUrl = 'https://ddragon.leagueoflegends.com/cdn/7.3.1/data/en_US/champion.json';

export const loadChampions = () => {
    return fetch(baseUrl)
    .then((res) => res.json());
};
