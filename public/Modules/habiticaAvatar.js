export const showHabiticaAvatar = (userId) => {
  let html = `
    <iframe
      src="https://crookedneighbor.github.io/habitica-avatar/avatar.html#${userId}"
      scrolling="no"
      style="width: 140px; height: 147px; overflow-y: hidden; border: none;"
    ></iframe>
  `;

  let div = document.createElement('div');
  div.innerHTML = html;
  div.classList.add('wrapper');
  div.setAttribute('id', 'habiticaAvatarDiv');
  document.getElementById('main').appendChild(div);
};
