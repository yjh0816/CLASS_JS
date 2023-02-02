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
  // let div = document.getElementsByTagName('div')[0];
  // div.id = id;
  title.parentElement.id = id;
  title.value = data.title;
  content.innerText = data.content;
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
}
