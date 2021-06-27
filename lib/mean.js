/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );


// MAIN //

/**
* Returns the expected value of a Bernoulli distribution.
*
* @param {Probability} p - success probability
* @returns {NonNegativeNumber} expected value
*
* @example
* var v = mean( 0.1 );
* // returns 0.1
*
* @example
* var v = mean( 0.5 );
* // returns 0.5
*
* @example
* var v = mean( 1.1 );
* // returns NaN
*
* @example
* var v = mean( NaN );
* // returns NaN
*/
function mean( p ) {
	if (
		isnan( p ) ||
		p < 0.0 ||
		p > 1.0
	) {
		return NaN;
	}
	return p;
}


// EXPORTS //

module.exports = mean;