body = document.querySelector('body');
texts = document.querySelectorAll(".blog-text p")
popup = document.querySelector(".text-is-selected")
copyBtn = document.querySelector("#copy-btn")
shareBtn = document.querySelector("#share-btn")
twitterShare = document.querySelector("#twitter-share");
instagramShare = document.querySelector("#instagram-share");

/* toggle between light and dark-theme */
/* using localstorage */

let theme = localStorage.getItem('theme')
if (theme == 'dark')
{
    body.classList.add(`${theme}-theme`)
}
else if (theme == 'white')
{
    body.classList.remove('dark-theme')
}
else
{
    body.classList.remove(`${theme}-theme`)
}

toogleThemeBtn = document.querySelector(".toogle-theme");
toogleThemeBtn.addEventListener('click', () => {
    let body = document.body;
    let theme = localStorage.getItem('theme')

    if (theme == null)
    {
        body.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark')
    }
    else if (theme == 'white')
    {
        body.classList.toggle('dark-theme')
        localStorage.setItem('theme', 'dark')
    }
    else
    {
        body.classList.toggle(`${theme}-theme`)
        localStorage.setItem('theme', 'white')
    }

    if (body.classList.contains('dark-theme'))
    {
        toogleThemeBtn.innerHTML = '☀'
    }
    else
    {
        toogleThemeBtn.innerHTML = '🌙'
    }
})

console.log(texts);
texts.forEach((text) => {
    text.addEventListener('mouseup', (e) => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        // Position the popup near the selected text.
        const selection = window.getSelection().getRangeAt(0);
        const rect = selection.getBoundingClientRect();
        popup.style.top = rect.bottom + "px";
        popup.style.left = rect.left + "px";
        console.log(rect)

        // Show the popup.
        popup.style.display = "flex";

        //functionality for the copy btn
        copyBtn.addEventListener('click', () => {
            document.execCommand("copy");
        })
        //functionality for the share btn
        shareBtn.addEventListener('click', () => {
            instagramShare.style.display = "block"
            twitterShare.style.display = "block"
            instagramShare.classList.add('show')
            twitterShare.classList.add('show')
        })
        twitterShare.addEventListener('click', () => {
            twitterShare.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}`;
        })
    } else {
        popup.style.display = "none"
        instagramShare.style.display = "none"
        twitterShare.style.display = "none"
    }
    console.log(selectedText);
})
})