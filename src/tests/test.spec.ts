// import {describe, expect, test} from '@jest/globals';

function sum(a: number, b: number) {
	return a + b;
}

describe("learn_jest", () => {
	test("should be valid", () => {
		expect(1).toBe(1);
	});

	test("adds 1 + 2 to equal 3", () => {
		expect(sum(1, 2)).toBe(3);
	});
	test("object assignment", () => {
		const data: {
			[name: string]: unknown;
		} = { one: 1 };
		data["two"] = 2;
		expect(data).toEqual({ one: 1, two: 2 });
	});
	test("adds 1 + 2 to NOT to be 5", () => {
		expect(sum(1, 2)).not.toBe(5);
	});



});
