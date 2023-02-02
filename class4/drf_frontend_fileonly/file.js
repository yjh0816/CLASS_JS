const SERVER_URL = 'http://127.0.0.1:8000';

// method name, table name
async function postImage(formData) {
  let response = await fetch(`${SERVER_URL}/blog/image`, {
    method: 'POST',
    body: formData,
  });
  let data = await response.json();
  return data;
}

async function submitImage() {
  let form = document.getElementById('form');
  let imageFormData = new FormData(form); // {image: 파일} -> input의 name 값
  let result = postImage(imageFormData);
  console.log(result);
}
