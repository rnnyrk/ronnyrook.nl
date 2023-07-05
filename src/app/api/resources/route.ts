import type * as i from 'types';
import { NextResponse } from 'next/server';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

import notionClient from 'services/notion';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const tag = searchParams.get('tag') as i.TagCategories | undefined;
  const type = searchParams.get('type') as i.ResourcesKeys;

  const type_options: i.ResourcesKeys[] = ['articles', 'tweets', 'sandboxes'];

  if (!type || !type_options.includes(type)) {
    return NextResponse.json({ error: 'Invalid type provided' }, { status: 400 });
  }

  try {
    // Twitter saves db === default
    let database_id = '44c4dbbc0f2b4c94852a701bc74404f2';

    if (type === 'articles') {
      database_id = '32b36bdf4d894d4c906b08a58cd052cb';
    } else if (type === 'sandboxes') {
      database_id = '6db8d02697a345ddb20fdff8bd8f4c80';
    }

    const query: QueryDatabaseParameters = {
      database_id,
      page_size: 100,
    };

    if (tag) {
      query.filter = {
        property: 'Topics',
        multi_select: {
          contains: tag,
        },
      };
    }

    // Query all pages in the database
    const response = await notionClient.databases.query(query);

    // Format the data
    const pages = response.results.map((page: any) => {
      return {
        id: page.id,
        title: page.properties.Name.title[0].plain_text,
        link: page.properties.Link.url,
        tags: page.properties?.Topics?.multi_select,
      };
    });

    return NextResponse.json(pages, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
