let btn = document.getElementById('btn');
let video = document.getElementById('video');
video.setAttribute('src', '')

btn.addEventListener('click', () => {
    let inputUrl = document.getElementById('inputUrl')
    let url = inputUrl.value
    url = 'https://youtube.com/embed/' + url.slice(url.indexOf('=')+1)
    console.log(url)


    video.setAttribute('src', url);
    console.log(video)

    inputUrl.value = ''
})

