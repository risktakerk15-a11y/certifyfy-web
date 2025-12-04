const API = "https://certifyfy-backend.onrender.com";
const fileInput = document.getElementById('fileInput');
const verifyBtn = document.getElementById('verifyBtn');
const resultDiv = document.getElementById('result');

verifyBtn.onclick = async () => {
  const file = fileInput.files[0];
  if (!file) { alert('Select a file'); return; }
  const formData = new FormData();
  formData.append('file', file);
  resultDiv.innerText = 'Verifying...';
  try {
    const res = await fetch(`${API}/verify`, { method:'POST', body: formData });
    const data = await res.json();
    resultDiv.innerText = JSON.stringify(data, null, 2);
  } catch(err) {
    resultDiv.innerText = 'Error verifying file';
  }
};
