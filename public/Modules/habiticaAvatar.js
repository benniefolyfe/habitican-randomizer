export const showHabiticaAvatar = (UUID) => {
  let html = `
    <div id="habiticaAvatarWrapper">
      <iframe
        src="https://crookedneighbor.github.io/habitica-avatar/avatar.html#${UUID}"
        scrolling="no"
        style="width: 140px; height: 147px; overflow-y: hidden; border: none;"
      ></iframe>
      <p>Description: <span id="habiticaAvatarDescription"></span></p>
      <button id="refreshHabiticaAvatar">Refresh</button>
    </div>
  `;

  let div = document.createElement('div');
  div.innerHTML = html;
  div.classList.add('wrapper');
  div.setAttribute('id', 'habiticaAvatarDiv');
  document.getElementById('main').appendChild(div);

  // Add event listener for the "Refresh" button
  document.getElementById('refreshHabiticaAvatar').addEventListener('click', () => {
    refreshHabiticaAvatar();
  });

  // Function to refresh the habiticaAvatar iframe
  const refreshHabiticaAvatar = () => {
    let iframe = document.querySelector('#habiticaAvatarDiv iframe');
    let userId = iframe.src.split('#')[1];
    iframe.src = `https://crookedneighbor.github.io/habitica-avatar/avatar.html#${UUID}`;
  };
};
