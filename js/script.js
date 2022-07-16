const articleCss = document.querySelector('.article_css')
const articleHtml = document.querySelector('.article_html')
const switchArticle = document.querySelectorAll('.switch_article')

const switch_article_img = document.querySelectorAll('.switch_article_img')
const switch_article_btn = document.querySelectorAll('.switch_article')

// const cssBtn = document.querySelector('#cssBtn')
// const htmlBtn = document.querySelector('#htmlBtn')

const toggle = function () {
    articleCss.classList.toggle('hide')
    articleHtml.classList.toggle('hide')

    switch_article_img.forEach(img => {
        img.classList.toggle('monochrome_img')
    })

    switch_article_btn.forEach(btn => {
        btn.classList.toggle('font_colored_gray')
        btn.toggleAttribute('disabled')
    })
}


switchArticle.forEach(btn => {
    btn.addEventListener('click', toggle)
})