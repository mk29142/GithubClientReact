export function getRepos(repos) {
    var languageMap = {};
    var max = 0;

    Array.prototype.forEach.call(repos.data, function(repo) {
    var language = repo.language;
    languageMap[language] = languageMap[language] || 0;
    languageMap[language]++;
    max = Math.max(max, languageMap[language]);
    });

    var favourites = [];

    for(var l in languageMap) {

        if (languageMap.hasOwnProperty(l) &&
            languageMap[l] === max) {
            favourites.push(l);
        }
    }

    return favourites;   
}