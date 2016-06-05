# typed-words

> A **simple** HTML API edition of [typed.js][typedjs]

## Installation

Requires [jQuery][] and [typed.js][typedjs]
Include *typed-words.js* after *typed.js*

## Usage

- Add class `typed-words` to one or more elements.
- Splits containing text on `|` (pipe character).
- Set type speed with `data-type-speed` attribute. Defaults to `42` (ms).

## Example

```html
<span class="typed-words" data-type-speed="210">first thing|second sentence|third item</span>
```

Or check [example/index.html][example] for a complete example.

## Credits

This is simply a small wrapper on top of [@mattboldt's typed.js][typedjs]. Creds to him (y)

[typedjs]: https://github.com/mattboldt/typed.js
[jQuery]: https://code.jquery.com/
[example]: example/index.html
