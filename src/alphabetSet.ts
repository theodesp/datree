export interface AlphabetSetEncoder {
	encode(c: string): number;
	decode(c: number): string;
}

/**
 * Standard UTF AlphabetSet maps a string to its UTF-16 representation and vice versa.
 */
export class UTFAlphabetSet implements AlphabetSetEncoder {
	encode(c: string) {
		return c.charCodeAt(0);
	}
	decode(c: number) {
		return String.fromCharCode(c);
	}
}
