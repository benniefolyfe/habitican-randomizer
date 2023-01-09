export const randomElementFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const fetchAPI = async (url, params) => {
  const response = await fetch(url, { headers, ...params });
  return response.json();
}

export const headers = {
  'x-client':
    "377a4d3d-c55c-48b8-9bf8-59b97480daf8 - Habitican Randomizer",
};
export const get = { method: 'GET' };
export const post = { method: 'POST' };

export const equipItem = async (type, key) => {
  return await fetchAPI(
    `https://habitica.com/api/v3/user/equip/${type}/${key}`,
    post
  );
}

export const castSkill = async (spellId, targetId) => {
  let url = `https://habitica.com/api/v3/user/class/cast/${spellId}`;
  if (targetId) {
    url += '?targetId=' + targetId;
  }
  let response = await fetchAPI(url, post);
  return response;
}
