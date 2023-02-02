const SERVER_URL = 'http://127.0.0.1:8000';

// method name, table name
async function postArticle(postArticle) {
  let response = await fetch(`${SERVER_URL}/blog/article`, {
    method: 'POST',
    body: postArticle,
  });
  let data = await response.json();
  return data;
}

async function submitArticle() {
  let form = document.getElementById('form');
  let formData = new FormData(form);
  let result = await postArticle(formData);
  console.log(result);
}
