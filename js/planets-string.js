(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);
    console.log('\n');

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let arrayBreaks = planetsArray.join('<br>');
    console.log(arrayBreaks);
    console.log(`\n`);
    // it may be useful for saving time when the js file is compiles in the browser and may break the planets
    // automatically instead of having to go in and add them individually later.



    let lister = '';
    planetsArray.forEach(function (planet) {
        lister += '<li>' + planet + '</li>\n';
    });
    console.log('<ul>' + '\n' + lister + '</ul');

})();