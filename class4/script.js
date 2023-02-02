const SERVER_URL = 'http://127.0.0.1:8000';

// method name, table name
async function postArticle(article) {
  let response = await fetch(`${SERVER_URL}/blog/article`, {
    method: 'POST',
    body: JSON.stringify(article),
    headers: {
      'Content-type': 'application/json',
    },
  });
  let data = await response.json();
  return response.status;
}

async function submitArticle() {
  let article = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
  };
  let result = postArticle(article);
  console.log(result);
}

async function getArticle(id) {
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`);
  let data = await response.json();
  return data;
}

async function insertArticle(id) {
  let data = await getArticle(id);
  let title = document.getElementById('title');
  let content = document.getElementById('content');
  let div = document.getElementsByTagName('div')[0];
  div.id = id;
  title.value = data.title;
  content.innerText = data.content;
}

async function getArticleList() {
  let response = await fetch(`${SERVER_URL}/blog/article`);
  let data = await response.json();
  return data;
}

async function insertArticleList() {
  let data = await getArticleList();
  data.forEach(element => {
    document.body.insertAdjacentHTML(
      'beforeEnd',
      `<div id="${element.id}">
        <h1>${element.title}</h2>
        <p>${element.content}</p>
        <button onclick="eraseArticle(${element.id})">삭제</button>
      </div>`,
    );
  });
}
async function deleteArticle(id) {
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: 'DELETE',
  });
  return response.status;
}

async function eraseArticle(id) {
  let result = deleteArticle(id);
  let div = document.getElementById(`${id}`);
  div.remove();
}

async function updateAricle(article, id) {
  let response = await fetch(`${SERVER_URL}/blog/article/${id}`, {
    method: 'PUT',
    body: JSON.stringify(article),
    headers: {
      'Content-type': 'application/json',
    },
  });
  let data = await response.json();
  return data;
}

async function modifyArticle() {
  let id = document.getElementsByTagName('div')[0].id;
  let article = {
    title: document.getElementById('title').value,
    content: document.getElementById('content').value,
  };
  let result = await updateAricle(article, id);
  // let div = document.getElementById(id);
  // div.innerText = `
  //   <div id="${result.id}">
  //     <h1>${result.title}</h2>
  //     <p>${result.content}</p>
  //     <button onclick="eraseArticle(${result.id})">삭제</button>
  //   </div>
  // `;
}
