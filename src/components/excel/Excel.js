export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = document.createElement('div')
        // $root.textContent = 'test'
        // $root.style.fontSize = '3rem'
        // console.log(this.components)
        this.components.forEach(Component => {
            const component = new Component()
            $root.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return $root
    }

// Складываем в шаблон методом render
    render() {
        //console.log(this.$el)
        // afterbegin, afterend, beforeend, beforebegin (this.$el - контейнер с дивом .ap)
        //this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
        this.$el.append(this.getRoot())
    }
}