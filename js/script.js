const articleCss = document.querySelector('.article_css')
const articleHtml = document.querySelector('.article_html')
const switchArticle = document.querySelectorAll('.switch_article')

const articleCssBtn = document.querySelector('#articleCss')
const articleHtmlBtn =  document.querySelector('#articleHtml')

let articleCssBtnStatus = true;
let articleHtmlBtnStatus = false;

const toggle = function () {
    articleCss.classList.toggle('hide')
    articleHtml.classList.toggle('hide')

    articleCssBtnStatus = !articleCssBtnStatus;
    articleHtmlBtnStatus = !articleHtmlBtnStatus;

    articleCssBtn.disabled = articleCssBtnStatus;
    articleHtmlBtn.disabled = articleHtmlBtnStatus;

}

switchArticle.forEach(btn => {
    btn.addEventListener('click', toggle)
})

articleCssBtn.disabled = articleCssBtnStatus;
articleHtmlBtn.disabled = articleHtmlBtnStatus;