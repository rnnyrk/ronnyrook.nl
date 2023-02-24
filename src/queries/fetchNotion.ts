import * as i from 'types';

export const fetchNotion = async (type: i.ResourcesKeys) => {
  let resources: null | i.Resource[] = null;

  try {
    const res = await fetch(`http://localhost:3000/api/notion?type=${type}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    const data = await res.json();
    resources = data;
  } catch (error) {
    console.error(error);
  }

  return resources;
};
