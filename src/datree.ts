import { AlphabetSetEncoder, UTFAlphabetSet } from "./alphabetSet.js";
import {
	DArray,
	INITIAL_ROOT_BASE,
	ROOT_CHECK_VALUE,
	LEAF_BASE_VALUE,
	SearchResult,
	TrieState,
} from "./types.js";

export class DoubleArrayTrie {
	// The double array that stores the base the check arrays
	private da: DArray = {
		base: [],
		check: [],
	};
	// The alphabet set encoder
	private encoder: AlphabetSetEncoder;

	/**
	 * Constructs a DoubleArrayTrie for the given AlphabetSetEncoder encoder.
	 *
	 * @param encoder AlphabetSetEncoder
	 */
	constructor(encoder: AlphabetSetEncoder = new UTFAlphabetSet()) {
		this.encoder = encoder;
		this.init();
	}

	private init() {
		this.da.base.push(INITIAL_ROOT_BASE);
		this.da.check.push(ROOT_CHECK_VALUE);
	}

	private getNext(state: TrieState): number {
		return this.getBase(state.index) + state.current;
	}
	/**
	 * This method, at its core, walks a path on the trie. Given a string, it
	 * decides whether it is contained as a prefix of other strings, if it is
	 * contained as a standalone string or if it is not present. Particularly:
	 * <li>If the string is contained but has not been inserted</li>
	 *
	 * @param prefix The string to search on the trie
	 * @return The result of the search
	 */
	search(prefix: string) {
		let result: SearchResult = {
			matchType: "PURE_PREFIX",
		};
		const state = {
			index: 0,
			current: 0,
		};
		let next = 0;
		for (let i = 0; i < prefix.length; i += 1) {
			const c = prefix[i];
			state.current = this.encoder.encode(c);
			// t := base[s] + c;
			next = this.getNext(state);
			// check[t] == s
			if (next < this.da.base.length && this.getCheck(next) == state.index) {
				if (this.getBase(next) == LEAF_BASE_VALUE) {
					if (i === prefix.length - 1) {
						// The string has been exhausted. Return perfect match.
						result = {
							matchType: "PERFECT_MATCH",
						};
						break;
					}
					// The string still has more to go. Return empty handed.
					result = undefined;
					break;
				}
				// Advance index
				state.index = next;
			} else {
				// The candidate does not belong to the current state. Return empty handed.
				result = undefined;
				break;
			}
		}
		return result;
	}
	/**
	 * This method performs a prefix search on the trie looking for the prefix string.
	 * If found returns true and false otherwise.
	 *
	 * @param prefix The string to search on the trie
	 * @returns boolean
	 */
	containsPrefix(prefix: string) {
		const result = this.search(prefix);
		return !!result;
	}

	/**
	 * Returns the value of the base array at <tt>position</tt>.
	 *
	 * @param pos The index in the base array
	 * @return The value at <tt>position</tt>
	 */
	getBase(pos: number) {
		return this.da.base[pos];
	}

	/**
	 * Returns the value of the check array at <tt>position</tt>.
	 *
	 * @param pos The index in the check array
	 * @return The value at <tt>position</tt>
	 */
	getCheck(pos: number) {
		return this.da.check[pos];
	}

	/**
	 * Sets the value of the base array at <tt>position</tt> to
	 * value <tt>value</tt>.
	 *
	 * @param pos The index in the base array whose value is to be set
	 * @param value The value to set
	 */
	private setBase(pos: number, value: number) {
		this.da.base[pos] = value;
	}

	/**
	 * Sets the value of the check array at <tt>position</tt> to
	 * value <tt>value</tt>.
	 *
	 * @param pos The index in the check array whose value is to be set
	 * @param value The value to set
	 */
	private setCheck(pos: number, value: number) {
		this.da.check[pos] = value;
	}
}
