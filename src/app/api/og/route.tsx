import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Ronny Rook - Blog Example';

  return new ImageResponse(
    (
      <div tw="h-full w-full flex items-center bg-[#6FAEF7]">
        <h2 tw="w-full flex flex-col py-8 px-12 max-w-[60%]">
          <span tw="text-[#253C66] text-[48px] font-bold">{title}</span>
          <span tw="text-white">rnnyrk</span>
        </h2>

        <div tw="w-[800px] h-[800px] rounded-full bg-[#253C66] absolute right-[-300px] " />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
