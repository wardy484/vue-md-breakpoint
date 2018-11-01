# vue-md-breakpoint

This is a fork of vue-md-breakpoint to allow the overriding of breakpoint widths.
Original Package: https://github.com/cb109/vue-md-breakpoint 

Access the current breakpoint from the material design spec inside a Vue app.
Resizing the browser will update the breakpoint accordingly.

## Installation

    npm install vue-md-breakpoint
    # or:
    yarn add vue-md-breakpoint

## Usage

You can use it as a mixin for your app.

    import Vue from 'vue';
    import breakpoint from '@wardy484/vue-md-breakpoint';

    // in your app/component:
    // breakpoint override is optional, if not provided then the defaults from the original package will be applied
    Vue.use(breapoint, {
        breakpoints: {
            xs: 500,
            sm: 700,
            lg: 1000,
            xl: 1300
        }
    });

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

