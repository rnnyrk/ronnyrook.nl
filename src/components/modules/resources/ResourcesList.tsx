import * as i from 'types';

import { Button } from 'common/interaction';

export const ResourcesList = async () => {
  let resources: null | i.Resource[] = null;

  try {
    const res = await fetch('http://localhost:3000/api/notion?type=twitter-saves', {
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

  return (
    <div className="flex">
      {resources &&
        resources.map((resource) => {
          return (
            <div
              key={resource.id}
              className="min-w-[425px] flex flex-col justify-items-stretch p-8 mb-4 mr-4 bg-slate-700 rounded-lg shadow-lg"
            >
              <div>
                {resource.tags?.map((tag) => (
                  <span
                    key={tag.name}
                    className="text-sm bg-slate-500 rounded-full px-2 py-1 mr-2 whitespace-nowrap"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <h1 className="grow-[2] text-xl my-4">{resource.title}</h1>
              <Button
                href={resource.link}
                type="link"
              >
                Open on Twitter
              </Button>
            </div>
          );
        })}
    </div>
  );
};
