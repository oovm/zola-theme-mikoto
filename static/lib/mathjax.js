window.MathJax = {
    options: {
        skipHtmlTags: [
            'script', 'noscript', 'style', 'textarea', 'pre',
            'code', 'annotation', 'annotation-xml'
        ],
        includeHtmlTags: {
            br: ''
        },
    },
    tex: {
        inlineMath: [['$', '$']],
        displayMath: [["$$", "$$"]],
        tags: 'ams',
        macros: {
            // Functions
            arccot: '\\operatorname{arccot}',
            arcsec: '\\operatorname{arcsec}',
            arccsc: '\\operatorname{arccsc}',
        },
    },
    svg: { fontCache: 'global' }
}
