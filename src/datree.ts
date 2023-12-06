import { AlphabetSetEncoder, UTFAlphabetSet } from "./alphabetSet.js";
import { DArray, INITIAL_ROOT_BASE, ROOT_CHECK_VALUE } from "./types.js";

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
}
