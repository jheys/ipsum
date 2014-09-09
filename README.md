ipsum
====

A simple customizable gibberish generator written in javascript. It takes a dictionary (an array of words and/or phrases) and produces lovely randomized placeholder text as needed. Amazing, I know.

Ipsum is compatible with web browsers and Nodejs.

installation
----

#### web

    bower install ipsum

or download/clone from here and put ipsum.js somewhere handy.

#### node

    npm install ipsum

usage
----

#### web

    <script src="wherever/you/put/ipsum.js"></script>
    <script>
        var groot = new Ipsum();
        console.log(groot.generate());
    </script>

#### node

    var Ipsum = require('ipsum').Ipsum,
        groot = new Ipsum();

        console.log(groot.generate());

As you may have noticed, ipsum's the default dictionary is groot-speak. Since
groot's vocabulary is very limited, so you will likely want to use your own.
Here's an example with some Furbish:

    var furbish = [ 'ee', 'koh', 'kohkoh', 'ohtoomah', 'baybee', 'boodah',
        'boh', 'eekah', 'dah', 'dahboo', 'daheetah', 'byebye', 'bootay',
        'aylohmaylah', 'tay', 'toh', 'nohlah', 'aykoo', 'ayway', 'doodah'
    ];
    var furby = new Ipsum(furbish);
    console.log(furby.generate());

*NOTE: This is only a partial extract of the known Furbish vocabulary.*

I should also mention, you can specify the number of words,
sentences, or paragraphs you want by passing in a number and type. Both singular
(`'word'`, `'sentence'`, and `'paragraph'`) and plural (`'words'`, `'sentences'`,
and `'paragraphs'`) forms of the supported types are understood. For example:

    console.log(furby.generate(2, 'sentences'));
    console.log(furby.generate(30, 'words'));
    console.log(furby.generate(1, 'paragraph'));
