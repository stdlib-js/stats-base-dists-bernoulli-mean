<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Mean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Bernoulli][bernoulli-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Bernoulli][bernoulli-distribution] random variable is

<!-- <equation class="equation" label="eq:bernoulli_expectation" align="center" raw="\mathbb{E}\left[ X \right] = p" alt="Expected value for a Bernoulli distribution."> -->

<div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = p" data-equation="eq:bernoulli_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/mean/docs/img/equation_bernoulli_expectation.svg" alt="Expected value for a Bernoulli distribution.">
    <br>
</div>

<!-- </equation> -->

where `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mean@deno/mod.js';
```

#### mean( p )

Returns the [expected value][expected-value] of a [Bernoulli][bernoulli-distribution] distribution with success probability `p`.

```javascript
var v = mean( 0.1 );
// returns 0.1

v = mean( 0.5 );
// returns 0.5
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = mean( NaN );
// returns NaN

v = mean( 1.5 );
// returns NaN

v = mean( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import mean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-bernoulli-mean@deno/mod.js';

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = mean( p );
    console.log( 'p: %d, E(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-bernoulli-mean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-bernoulli-mean

[test-image]: https://github.com/stdlib-js/stats-base-dists-bernoulli-mean/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-mean/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-bernoulli-mean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-bernoulli-mean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-bernoulli-mean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-bernoulli-mean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-mean/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-mean/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-mean/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-bernoulli-mean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-bernoulli-mean/main/LICENSE

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
