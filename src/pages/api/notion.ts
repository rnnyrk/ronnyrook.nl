import { NextApiRequest, NextApiResponse } from 'next';

import notionClient from 'services/notion';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const type = req.query.type;

  if (type !== 'twitter-saves') {
    res.status(400).json({ error: 'Invalid type provided' });
  }

  try {
    const twitterSavesDbId = '44c4dbbc0f2b4c94852a701bc74404f2';

    // Query all pages in the database
    const response = await notionClient.databases.query({
      database_id: twitterSavesDbId,
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

    res.status(200).json(pages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export default handler;
