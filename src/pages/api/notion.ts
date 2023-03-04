import * as i from 'types';
import { NextApiRequest, NextApiResponse } from 'next';

import notionClient from 'services/notion';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const type = req.query.type as i.ResourcesKeys;
  const type_options: i.ResourcesKeys[] = ['articles', 'tweets', 'sandboxes'];

  if (!type || !type_options.includes(type)) {
    return res.status(400).json({ error: 'Invalid type provided' });
  }

  try {
    // Twitter saves db === default
    let database_id = '44c4dbbc0f2b4c94852a701bc74404f2';

    if (type === 'articles') {
      database_id = '32b36bdf4d894d4c906b08a58cd052cb';
    } else if (type === 'sandboxes') {
      database_id = '6db8d02697a345ddb20fdff8bd8f4c80';
    }

    // Query all pages in the database
    const response = await notionClient.databases.query({
      database_id,
      page_size: 100,
    });

    // Format the data
    const pages = response.results.map((page: any) => {
      return {
        id: page.id,
        title: page.properties.Name.title[0].plain_text,
        link: page.properties.Link.url,
        tags: page.properties?.Topics?.multi_select,
      };
    });

    return res.status(200).json(pages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

export default handler;
