"use strict";

import {expect} from "chai";
import App from "../src/app.js";

describe("newsApp", () => {
    it("shall exist", () => {
        let newsApp = new newsApp();

        expect(newsApp).to.be.defined;
    });
});
