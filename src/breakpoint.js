/**
 * A Vue mixin to get the current width/height and the associated breakpoint.
 *
 * Useful to e.g. adapt the user interface from inside a Vue component
 * as opposed to using CSS classes. The breakpoint pixel values and
 * range names are taken from Vuetify (https://github.com/vuetifyjs).
 *
 * Use within a component:
 *
 *   import breakpoint from 'vue-md-breakpoint.js';
 *
 *   export default {
 *     name: 'my-component',
 *     mixins: [breakpoint],
 *     ...
 *
 * Then inside a template:
 *
 *   <div v-if="$breakpoint.smAndDown">...</div>
 */

let breakpoints = {
  xs: 600,
  sm: 960,
  md: 1280 - 16,
  lg: 1920 - 16
};

const Breakpoints = {};

Breakpoints.install = function(Vue, options) {

  if (options.breakpoints) {
    breakpoints = options.breakpoints;
  }

  Vue.mixin({
    data() {
      return {
        clientWidth: 0,
        clientHeight: 0,
      };
    },
    computed: {
      $breakpoint() {  
        const xs = this.clientWidth < breakpoints.xs;
        const sm = this.clientWidth < breakpoints.sm && !xs;
        const md = this.clientWidth < breakpoints.md && !(sm || xs);
        const lg = this.clientWidth < breakpoints.lg && !(md || sm || xs);
        const xl = this.clientWidth >= breakpoints.lg && !(lg || md || sm || xs);
  
        const xsOnly = xs;
        const smOnly = sm;
        const smAndDown = (xs || sm) && !(md || lg || xl);
        const smAndUp = !xs && (sm || md || lg || xl);
        const mdOnly = md;
        const mdAndDown = (xs || sm || md) && !(lg || xl);
        const mdAndUp = !(xs || sm) && (md || lg || xl);
        const lgOnly = lg;
        const lgAndDown = (xs || sm || md || lg) && !xl;
        const lgAndUp = !(xs || sm || md) && (lg || xl);
        const xlOnly = xl;
  
        let name;
        switch(true) {
          case (xs):
            name = 'xs';
            break;
          case (sm):
            name = 'sm';
            break;
          case (md):
            name = 'md';
            break;
          case (lg):
            name = 'lg';
            break;
          default:
            name = 'xl';
            break;
        }
  
        const result = {
          // Definite breakpoint.
          'xs': xs,
          'sm': sm,
          'md': md,
          'lg': lg,
          'xl': xl,
  
          // Useful e.g. to construct CSS class names dynamically.
          'name': name,
  
          // Breakpoint ranges.
          'xsOnly': xsOnly,
          'smOnly': smOnly,
          'smAndDown': smAndDown,
          'smAndUp': smAndUp,
          'mdOnly': mdOnly,
          'mdAndDown': mdAndDown,
          'mdAndUp': mdAndUp,
          'lgOnly': lgOnly,
          'lgAndDown': lgAndDown,
          'lgAndUp': lgAndUp,
          'xlOnly': xlOnly,
  
          // For custom breakpoint logic.
          'width': this.clientWidth,
          'height': this.clientHeight,
        };
        return result;
      },
    },
    methods: {
      _updateDimensions() {
        // Cross-browser support as described in:
        // https://stackoverflow.com/questions/1248081
        this.clientWidth = Math.max(document.documentElement.clientWidth,
                                    window.innerWidth || 0);
        this.clientHeight = Math.max(document.documentElement.clientHeight,
                                     window.innerHeight || 0);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this._updateDimensions();
        window.addEventListener('resize', this._updateDimensions,
                                {'passive': true});
      });
    },
    destroyed() {
      window.removeEventListener('resize', this._updateDimensions);
    },
  });
};

export default Breakpoints;
