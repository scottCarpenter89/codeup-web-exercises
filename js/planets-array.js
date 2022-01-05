(function(){
    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    function addSun(celestialBody) {
        celestialBody.unshift('Sun');
        return celestialBody;
    }

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(addSun(planets));
    console.log('\n');

    function addPluto(celestialBody) {
        celestialBody.push('Pluto');
        return celestialBody;
    }

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(addPluto(planets));
    console.log(`\n`);

    function removeSun(celestialBody) {
        celestialBody.shift();
        return celestialBody;
    }

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(removeSun(planets));
    console.log(`\n`);

    function removePluto(celestialBody) {
        celestialBody.pop();
        return celestialBody;
    }

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(removePluto(planets));
    console.log(`\n`);

    function findEarth(celestialBody) {
        let heresEarth = celestialBody.indexOf('Earth');
        return `Earth is at the index of ${heresEarth} in the array`;
    }

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(findEarth(planets));
    console.log(`\n`);

    function reverseSolarSystem(celestialBodies) {
        celestialBodies.reverse();
        return celestialBodies;
    }

    console.log("Reversing the order of the planets array.");
    console.log(reverseSolarSystem(planets));
    console.log(`\n`);

    function alphabeticalSolarSystem(celestialBodies) {
        celestialBodies.sort();
        return celestialBodies;
    }

    console.log(`Here are the planets sorted alphabetically:`);
    console.log(alphabeticalSolarSystem(planets));

})();