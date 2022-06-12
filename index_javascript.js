async function submit() {

    let response = await fetch('/show_page.html'); alert('is submited');
    // let response = await fetch(url, options); // завершается с заголовками ответа
    
    let result = response.text();
alert (result);

//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // читаем ответ в формате JSON

// alert(commits[0].author.login);

}

let subBut = document.querySelector('.submit');
subBut.addEventListener('click', submit);