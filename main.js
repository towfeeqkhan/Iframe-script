const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (event) => {
  
  event.preventDefault();

  const blockText = document.getElementById('input-box').value;

  const iframes = document.querySelectorAll('iframe');

  for (let i = 0; i < iframes.length; i++) {
    const src = iframes[i].getAttribute('src');
    if (src && src.includes(blockText)) {
      iframes[i].outerHTML = '<div>Iframe blocked</div>';
    }
  }
});
