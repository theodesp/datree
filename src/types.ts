import { AlphabetSetEncoder } from "./alphabetSet.js";

/**
 * Represents a search for a string that
 * successfully ends at a leaf node.
 */
export type PERFECT_MATCH = {
	matchType: "PERFECT_MATCH";
};

/**
 * Represents a search for a string that
 * successfully ends at a non-leaf node.
 */
export type PURE_PREFIX = {
	matchType: "PURE_PREFIX";
};
/**
 * Represents a search for a string that
 * is successful. Not strictly necessary
 * but useful as the disjunction of
 * PERFECT_MATCH and PURE_PREFIX.
 */
export type PREFIX = {
	matchType: "PREFIX";
};
/**
 * Union type of all possible values of Trie SearchResult
 */
export type SearchResult = PERFECT_MATCH | PURE_PREFIX | PREFIX | undefined;

// The initial offset
export const INITIAL_ROOT_BASE = 1;
// The unoccupied spot value
export const EMPTY_VALUE = -1;
// The value that represents a leaf
export const LEAF_BASE_VALUE = -2;
// The root check value
export const ROOT_CHECK_VALUE = -3;

/**
 * Double-array structure type
 */
export type DArray = {
	base: Array<number>;
	check: Array<number>;
};

/**
 *  Trie structure
 */
export type Trie = {
	da: DArray;
	encoder: AlphabetSetEncoder;
};

/**
 * @brief TrieState structure
 */
export type TrieState = {
	/**
	 * Index in double-array/tail structures
	 */
	index: number;
	/**
	 * Suffix character current offset, if in suffix
	 */
	current: number;
};
