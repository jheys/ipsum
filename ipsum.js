(function(global){
    var getRandomItemFromArray = function (src) {
        if (src && src.length) {
            var r = Math.round(Math.random() * (src.length - 1));
            return src[r];
        }
        return null;
    };

    var Ipsum = function(dictionary) {
        this.dictionary = dictionary || ['i', 'am', 'groot'];

        // shuffle the array for more randomness
        this.shuffle();
    };

    Ipsum.prototype.shuffle = function () {
        this.dictionary.sort(function (a, b) {
            return Math.random() - Math.random();
        });
        this.currentIndex = 0;
    };

    Ipsum.prototype.getNextWord = function () {
        var word = this.dictionary[this.currentIndex];
        this.currentIndex++;
        if (this.currentIndex === this.dictionary.length) {
            this.shuffle();
        }
        return word;
    };

    Ipsum.prototype.generateSentence = function () {
        // this probably looks funny, but it's a cheap way of
        // increasing our odds of selecting a period (over ? or !)
        var punctuation = ['.', '.', '.', '.', '.', '!', '?', '.', '.', '.', '.', '.'];
        var numWords = Math.round(Math.random() * 19) + 1; // range: 1 - 20
        var sentence = this.generate(numWords);
        sentence += getRandomItemFromArray(punctuation);
        return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    };

    Ipsum.prototype.generateParagraph = function () {
        var sentences = [];
        var numSentences = Math.round(Math.random() * 5) + 4; // range: 5 - 9
        for (var i = 0; i < numSentences; i++ ) {
            sentences.push(this.generateSentence());
        }
        return sentences.join(' ');
    };

    Ipsum.prototype.generate = function (n, type) {
        var output = [],
            func = null,
            delimiter = ' '
            n = Math.abs(n) || this.dictionary.length;

        switch (type) {
            case 'sentence':
            case 'sentences':
                func = this.generateSentence;
                break;

            case 'paragraph':
            case 'paragraphs':
                func = this.generateParagraph;
                delimiter = "\n";
                break;

            default: // words
                func = this.getNextWord;
                break;
        }

        for (var i = 0; i < n; i++) {
            output.push(func.apply(this));
        }
        return output.join(delimiter);
    };

    global.Ipsum = Ipsum;
}(this));
