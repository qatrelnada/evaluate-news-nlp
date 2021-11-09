import { checkForURL } from "../src/client/js/textChecker";

describe("Testing the URL validation ", () => {
    test("Testing the checkForURL() function", () => {
        expect(checkForURL).toBeDefined();
    });

    test("checkForURL return true if the url is valid", () => {
        expect(checkForURL("http://google.com")).toBeTruthy();
    });

    test("checkForURL return true if the url is invalid", () => {
        expect(checkForURL("text")).toBeFalsy();
    });
});