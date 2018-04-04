# vue-md-breakpoint

Access the current breakpoint from the material design spec inside a Vue app.
Resizing the browser will update the breakpoint accordingly.

## Demo

[![Edit vue-md-breakpoint demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n7nj0p76ml)

## Installation

    npm install vue-md-breakpoint
    # or:
    yarn add vue-md-breakpoint

## Usage

You can use it as a mixin for your app.

    import Vue from 'vue';
    import breakpoint from 'vue-md-breakpoint';

    // in your app/component:

    mixins: [breakpoint],

    // and in your templates:

    <div v-if="$breakpoint.smAndUp"></div>

## API

- `$breakpoint.name`
- `$breakpoint.xsOnly`
- `$breakpoint.smOnly`
- `$breakpoint.smAndDown`
- `$breakpoint.smAndUp`
- `$breakpoint.mdOnly`
- `$breakpoint.mdAndDown`
- `$breakpoint.mdAndUp`
- `$breakpoint.lgOnly`
- `$breakpoint.lgAndDown`
- `$breakpoint.lgAndUp`
- `$breakpoint.xlOnly`
- `$breakpoint.width`
- `$breakpoint.height`

## Tests

    npm run test

