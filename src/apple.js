"use strict";

class NewsApp {
    constructor() {
        this.maxLength = 10;
    }
}

export default NewsApp;

/*
let’s say you’re asked to implement a news app where each story has a length
and a score, create an algorithm that returns the stories with the highest
score with length less than or equal to a max length.

```let maxLength = 10;

let stories = [{length: 4, score: 5}, {length: 6, score: 5},
{length: 2, score: 2}, {length: 2, score: 3}, {length: 2, score: 4},
{length: 4, score: 4}];

let selectedStories = [];```

*/

let maxLength = 10;

let stories = [{length: 4, score: 5}, {length: 6, score: 5},
{length: 2, score: 2}, {length: 2, score: 3}, {length: 2, score: 4},
{length: 4, score: 4}];

let selectedStories = [];
