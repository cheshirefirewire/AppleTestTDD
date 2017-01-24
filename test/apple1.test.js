"use strict";

import {expect} from "chai";
import NewsApp from "../src/apple.js";

describe("NewsApp", () => {
    it("shall exist", () => {
        let newsApp = new NewsApp();

        expect(newsApp).to.be.defined;
    });

    it("shall have a score of 5", () => {
        let newsApp = new NewsApp();

        expect(newsApp.score).to.equal(5);
    });

});
