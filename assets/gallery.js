const links=[...document.querySelectorAll('[data-lightbox]')];
if(links.length&&typeof HTMLDialogElement!=='undefined'){
  const dialog=document.createElement('dialog');dialog.className='image-dialog';dialog.setAttribute('aria-label','Visualização ampliada do aplicativo');
  const close=document.createElement('button');close.type='button';close.textContent='Fechar ×';close.className='image-dialog-close';close.setAttribute('autofocus','');
  const image=document.createElement('img');const caption=document.createElement('p');
  dialog.append(close,image,caption);document.body.append(dialog);let trigger;
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{document.body.classList.remove('image-open');trigger?.focus();});
  for(const link of links)link.addEventListener('click',event=>{
    event.preventDefault();trigger=link;image.src=link.href;image.alt=link.querySelector('img')?.alt??link.dataset.caption??'Captura do MSL';caption.textContent=image.alt;
    dialog.showModal();document.body.classList.add('image-open');
  });
}
