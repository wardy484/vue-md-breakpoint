# vue-md-breakpoint

Access the current breakpoint from the material design spec inside a Vue app.
Resizing the browser will update the breakpoint accordingly.

## Usage

You can use it as a plugin or mixin for your app.

    import Vue from 'vue';
    import breakpoint from 'vue-md-breakpoint';

    Vue.use(breakpoint);

    // or in your app/component:

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

