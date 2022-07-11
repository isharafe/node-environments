import { addFn } from "../../src/some.service";
// import jest from "jest";

test("some test", () => {
    expect(addFn(1, 2)).toBe(3);
});

test("environment test", () => {
    const environment = process.env.NODE_ENV;
    expect(environment).toBe("test");
});
