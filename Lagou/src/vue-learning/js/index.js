var app = new Vue({
    el:'#app',
    data:{
        active:0,
        nav:[{
            title:'Vue 构造函数整理-原型',
            info:"这里是对 Vue 构造函数原型的整理，便于看源码时查看方法的对应位置。",
            code:`
    // initMixin(Vue)    src/core/instance/init.js **************************************************
    Vue.prototype._init = function (options?: Object) {}

    // stateMixin(Vue)    src/core/instance/state.js **************************************************
    Vue.prototype.$data
    Vue.prototype.$props
    Vue.prototype.$set = set
    Vue.prototype.$delete = del
    Vue.prototype.$watch = function (
        expOrFn: string | Function,
        cb: any,
        options?: Object
    ): Function {}

    // eventsMixin(Vue)    src/core/instance/events.js **************************************************
    Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {}
    Vue.prototype.$once = function (event: string, fn: Function): Component {}
    Vue.prototype.$off = function (event?: string | Array<string>, fn?: Function): Component {}
    Vue.prototype.$emit = function (event: string): Component {}

    // lifecycleMixin(Vue)    src/core/instance/lifecycle.js **************************************************
    Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {}
    Vue.prototype.$forceUpdate = function () {}
    Vue.prototype.$destroy = function () {}

    // renderMixin(Vue)    src/core/instance/render.js **************************************************
    // installRenderHelpers 函数中
    Vue.prototype._o = markOnce
    Vue.prototype._n = toNumber
    Vue.prototype._s = toString
    Vue.prototype._l = renderList
    Vue.prototype._t = renderSlot
    Vue.prototype._q = looseEqual
    Vue.prototype._i = looseIndexOf
    Vue.prototype._m = renderStatic
    Vue.prototype._f = resolveFilter
    Vue.prototype._k = checkKeyCodes
    Vue.prototype._b = bindObjectProps
    Vue.prototype._v = createTextVNode
    Vue.prototype._e = createEmptyVNode
    Vue.prototype._u = resolveScopedSlots
    Vue.prototype._g = bindObjectListeners
    Vue.prototype.$nextTick = function (fn: Function) {}
    Vue.prototype._render = function (): VNode {}

    // core/index.js 文件中
    Object.defineProperty(Vue.prototype, '$isServer', {
        get: isServerRendering
    })

    Object.defineProperty(Vue.prototype, '$ssrContext', {
        get () {
        /* istanbul ignore next */
        return this.$vnode && this.$vnode.ssrContext
        }
    })

    // 在 runtime/index.js 文件中
    Vue.prototype.__patch__ = inBrowser ? patch : noop
    Vue.prototype.$mount = function (
        el?: string | Element,
        hydrating?: boolean
    ): Component {
        el = el && inBrowser ? query(el) : undefined
        return mountComponent(this, el, hydrating)
    }

    // 在入口文件 entry-runtime-with-compiler.js 中重写了 Vue.prototype.$mount 方法
    Vue.prototype.$mount = function (
        el?: string | Element,
        hydrating?: boolean
    ): Component {
        // ... 函数体
    }`
        },{
            title:'Vue 构造函数整理-全局API',
            info:"这里是对 Vue 构造函数全局API(静态属性和方法)的整理，便于看源码时查看方法的对应位置。",
            code:`
    // initGlobalAPI
    Vue.config
    Vue.util = {
        warn,
        extend,
        mergeOptions,
        defineReactive
    }
    Vue.set = set
    Vue.delete = del
    Vue.nextTick = nextTick
    Vue.options = {
        components: {
            KeepAlive
            // Transition 和 TransitionGroup 组件在 runtime/index.js 文件中被添加
            // Transition,
            // TransitionGroup
        },
        directives: Object.create(null),
        // 在 runtime/index.js 文件中，为 directives 添加了两个平台化的指令 model 和 show
        // directives:{
        //	model,
        //	show
        // },
        filters: Object.create(null),
        _base: Vue
    }

    // initUse ***************** global-api/use.js
    Vue.use = function (plugin: Function | Object) {}

    // initMixin ***************** global-api/mixin.js
    Vue.mixin = function (mixin: Object) {}

    // initExtend ***************** global-api/extend.js
    Vue.cid = 0
    Vue.extend = function (extendOptions: Object): Function {}

    // initAssetRegisters ***************** global-api/assets.js
    Vue.component =
    Vue.directive =
    Vue.filter = function (
    id: string,
    definition: Function | Object
    ): Function | Object | void {}

    // expose FunctionalRenderContext for ssr runtime helper installation
    Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
    })

    Vue.version = '__VERSION__'

    // entry-runtime-with-compiler.js
    Vue.compile = compileToFunctions
    `
        },{
            title:'Vue 选项的合并策略',
            info:"此为全局变量，可添加修改",
            detail:[{
                code:`
    /**
     * Option overwriting strategies are functions that handle
     * how to merge a parent option value and a child option
     * value into the final value.
     */
    const strats = config.optionMergeStrategies
                `,
                content:"这句代码就定义了 <code>strats</code> 变量，且它是一个常量，这个常量的值为 <code>config.optionMergeStrategies</code>，这个 <code>config</code> 对象是全局配置对象，来自于 <code>core/config.js</code> 文件，此时 <code>config.optionMergeStrategies</code> 还只是一个空的对象。注意一下这里的一段注释：选项覆盖策略是处理如何将父选项值和子选项值合并到最终值的函数。也就是说 <code>config.optionMergeStrategies</code> 是一个合并选项的策略对象，这个对象下包含很多函数，这些函数就可以认为是合并特定选项的策略。这样不同的选项使用不同的合并策略，如果你使用自定义选项，那么你也可以自定义该选项的合并策略，只需要在 <code>Vue.config.optionMergeStrategies</code> 对象上添加与自定义选项同名的函数就行。而这就是 <code>Vue</code> 文档中提过的全局配置：<a href='https://vuejs.org/v2/api/#optionMergeStrategies' target='_blank' rel='noopener noreferrer'>optionMergeStrategies</a>。"
            },{
                title:"选项 el、propsData 的合并策略",
                code:`
    /**
     * Options with restrictions
     */
    if (process.env.NODE_ENV !== 'production') {
        strats.el = strats.propsData = function (parent, child, vm, key) {
        if (!vm) {
            warn(
            \`option "\${key}" can only be used during instance \` +
            'creation with the \`new\` keyword.'
            )
        }
        return defaultStrat(parent, child)
        }
    }
                `,
                content:""
            }]
        }]
    },
    methods:{
        changeNavEvent:function(index){
            this.active = index
        }
    }
})