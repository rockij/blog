function Stack() {
    var count = 1000;
    var stack = [];
    var obj = {};

    function set(dom) {
        if (dom) {
            stack.push(dom);
        }
    }

    function push(dom) {
        count++;

        if (dom) {
            stack.push(dom);
        }

        return count;
    }

    function pop(dom) {
        count--;

        if (dom) {
            stack.pop();
        }
    }

    Object.defineProperties(obj, {
        print: {
            get: function () {
                return stack;
            }
        },
        set: { value: set },
        push: { value: push },
        pop: { value: pop }
    });

    return obj;
}

// 스크롤 이벤트 발생시 특정 작업을 일정 시간 간격으로 실행하도록 제한
function throttle(func, limit) {
    var lastFunc;
    var lastRan;

    return function () {
        var context = this;
        var args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// 하단 고정 영역
function Buffer(selector) {
    if (document.querySelector(selector) == (null || undefined)) return;

    const target = document.querySelector(selector)
    const contents = target.querySelector('.contents')
    const fixer = [].filter.call(contents.children, function (x) { return x.classList.contains('fixer') })[0]
    const isFixer = fixer ? true : false
    let bufferSize = typeof size == 'number' ? size : 0
    let history = 0
    let isEdited = false
    const obj = {}
    const bufferEl = document.createElement('div')

    function init() {
        // if (target.classList.contains('main')) return
        if (isFixer) bufferSize += fixer.offsetHeight

        bufferEl.classList.add('buffer')
        bufferEl.setAttribute('style', `height: ${bufferSize}px !important`)
        contents.insertAdjacentElement('beforeend', bufferEl)
        //console.log(fixer.offsetHeight);
    }

    function setSize(size) {
        target.querySelector('.buffer').setAttribute('style', `height: ${size}px !important`)
    }

    function set(size) {
        history = bufferSize
        bufferSize = size
        isEdited = true
        setSize(bufferSize)
    }

    function add(size) {
        history = bufferSize
        bufferSize += size
        isEdited = true
        setSize(bufferSize)
    }

    function revert() {
        bufferSize = history
        setSize(bufferSize)
    }

    function remove() {
        bufferEl.remove();
    }

    init()

    Object.defineProperties(obj, {
        isEdited: {
            get: function () {
                return isEdited
            }
        },
        get: {
            get: function () {
                return bufferSize
            }
        },
        set: { value: set },
        add: { value: add },
        revert: { value: revert },
        remove: { value: remove }
    })

    return obj

}

// 필요한 부분에 계산된 height 값 추가
function Information(selector) {
    if (document.querySelector(selector) == (null || undefined)) return
    const target = document.querySelector(selector)
    const header = target.querySelector('.header')
    const tabs = target.querySelector('.tabs')
    const subs = target.querySelector('.subs')
    const fix = target.querySelector('[data-role="fix"]')
    const content = target.querySelector('.content')
    let headerHeight = header ? header.getBoundingClientRect().height : 0
    let tabsHeight = tabs ? tabs.getBoundingClientRect().height : 0
    let subsHeight = subs ? subs.getBoundingClientRect().height : 0
    let fixHeight = fix ? fix.getBoundingClientRect().height : 0
    let contentPaddingTop = content ? parseInt(window.getComputedStyle(content).paddingTop) : 0
    let upperHeight
    const obj = {}

    if (target.classList.contains('page')) {
        upperHeight = headerHeight + tabsHeight + subsHeight + contentPaddingTop + fixHeight;
    }

    if (target.classList.contains('layer')) {
        upperHeight = headerHeight + tabsHeight + contentPaddingTop + 54;
    }

    Object.defineProperties(obj, {
        header: {
            get: function () {
                return header
            }
        },
        headerHeight: {
            get: function () {
                return headerHeight;
            }
        },
        contentPaddingTop: {
            get: function () {
                return contentPaddingTop;
            }
        },
        upperHeight: {
            get: function () {
                return upperHeight;
            }
        }
    })
    return obj
}

// header 존재여부에 따른 실행
function header() {
    const roots = document.querySelectorAll('.page, .popup')
    if (roots) {
        roots.forEach((root) => {
            const container = root.children[0]
            const header = container.querySelector('.header')
            if (header) {
                const isTitle = header.querySelector('.title') ? true : false
                const isTitleShow = isTitle && header.querySelector('.title').querySelector('.hide') ? true : false
                const hasFunc = header.querySelectorAll('.func').length > 0 ? true : false
                if (isTitleShow && !hasFunc) root.classList.add('-transparent')
            } else {
                root.classList.add('-no-header')
            }
        })
    }
}

// 현재 스크롤 위치 체크
function Scroll() {
    var body = document.body;
    var history = 0;

    return {
        save: function () {
            history = (window.hasScrollSave) ? getComputedStyle(body).marginTop.replace(/[^0-9]/g, '') : window.scrollY;

            if (!window.hasScrollSave) {
                body.classList.add('lock');
                body.style.marginTop = (history * -1) + 'px';
            }

            window.hasScrollSave = true;
        },

        load: function () {
            if (stack.print.length <= 2) {
                window.hasScrollSave = false;

                body.classList.remove('lock');
                body.removeAttribute('style');
                window.scrollTo(0, history);
            }
        }
    }
}

function Dim() {
    var dim = document.createElement('div');

    dim.classList.add('dim');

    return {
        open: function (id, isPLA) {
            var zIndex = stack.push();

            console.log('zIndex>>>>', zIndex);


            dim.dataset.id = id.slice(1);

            if (isPLA) {
                document.querySelector(id).insertAdjacentElement('beforebegin', dim);
            } else {
                document.body.append(dim);
            }

            dim.style.zIndex = zIndex;

            setTimeout(function () {
                dim.classList.add('-active');
            });
        },

        close: function () {
            stack.pop();

            dim.classList.remove('-active');

            setTimeout(function () {
                dim.remove();
            }, 600);
        },

        show: function () {
            dim.classList.add('-active');
        },

        hide: function () {
            dim.classList.remove('-active');
        }
    }
}

function Layer(id) {
    const layer = document.querySelector(id);
    let isReinit = false;
    let information;
    const scroll = new Scroll();
    const dim = new Dim();
    let layerBuffer;
    let isActive = false;
    const obj = {};

    function open(callback) {
        scroll.save()
        new Promise((resolve, reject) => {
            setTimeout(resolve)
        }).then(setTimeout(() => {
            dim.open(id, true);
        })).then(setTimeout(() => {
            // console.log('layer >>>', layer)
            layer.classList.add('-active')
            layer.style.zIndex = stack.push(layer)
            information = new Information(id);
            layerBuffer = new Buffer(id);
            isActive = true;
        }))
    }

    function close(callback, isRemove) {
        scroll.load()
        new Promise((resolve, reject) => {
            setTimeout(resolve)
        }).then(setTimeout(() => {
            layer.classList.remove('-active');
            layer.removeAttribute('style');
            if (isRemove) {
                setTimeout(function () {
                    layer.remove();
                }, 400);
            }
            stack.pop(layer);
        })).then(setTimeout(() => {
            console.log('layerBuffer>>>', layerBuffer);

            layerBuffer.remove();
        }, 400)).then(setTimeout(() => {
            dim.close();
            isActive = false;
        }))
    }

    Object.defineProperties(obj, {
        open: { value: open },
        close: { value: close },
        isOpen: {
            get: function () {
                return isActive;
            }
        },
        information: {
            get: function () {
                return information;
            }
        },
        buffer: {
            get: function () {
                return layerBuffer;
            }
        }
    })
    return obj
}

// 전역 관리, 상태 제어
var Layer = PLA(Layer);
function PLA(type) {
    return {
        open: function (id, callback) {
            window[id] = new type('#' + id);

            window[id].open(callback);

            console.log(id);

        },

        close: function (id, callback, isRemove) {
            window[id].close(callback, isRemove);
        },
    }
}

// window['buffer'] = new Buffer('.page');
window['information'] = new Information('.page');
window['stack'] = new Stack();