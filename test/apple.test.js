"use strict";

import {expect} from "chai";
import NewsApp from "../src/apple.js";

describe("NewsApp", () => {
    it("shall exist", () => {
        let newsApp = new NewsApp();

        expect(newsApp).to.be.defined;
    });

    it("shall have a max length of 10", () => {
        let newsApp = new NewsApp();

        expect(newsApp.maxLength).to.equal(10);
    });

});
