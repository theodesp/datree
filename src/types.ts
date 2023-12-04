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
