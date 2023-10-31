'use client';

import { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Cube({ title, image, image2 }: CubeProps) {
  const { scrollY } = useScroll();
  const cubeRef = useRef<HTMLDivElement>(null);
  const [cubeOffsetY, setCubeOffsetY] = useState<number>(0);

  useEffect(() => {
    setCubeOffsetY(cubeRef.current?.offsetTop || 0);
  }, [cubeRef]);

  const maxScrollValue = 180;

  const rotateX = useTransform(
    scrollY,
    // Map x from these values:
    [cubeOffsetY - 800, cubeOffsetY - 250],
    [0, maxScrollValue],
  );

  const negativeRotateX = useTransform(
    scrollY,
    // Map x from these values:
    [cubeOffsetY - 800, cubeOffsetY - 250],
    [0, -maxScrollValue],
  );

  return (
    <div
      className="cube-wrapper mb-[30vh]"
      ref={cubeRef}
    >
      <div className="cube-wrapper-left l">
        <motion.div
          className="cube-wrapper-2 large"
          style={{
            rotateX,
          }}
        >
          <div className="cube-face-front l">
            <motion.div className="inner-cube-marquee">
              <div className="text-block-2-copy">{title}</div>
              <div className="text-block-2-copy">({title})</div>
            </motion.div>

            <motion.div className="inner-cube-marquee">
              <div className="text-block-2-copy">{title}</div>
              <div className="text-block-2-copy">({title})</div>
            </motion.div>

            <motion.div className="inner-cube-marquee">
              <div className="text-block-2-copy">{title}</div>
              <div className="text-block-2-copy">({title})</div>
            </motion.div>
          </div>

          <div className="cube-face-2 l">
            <motion.div className="inner-cube-marquee-rev">
              <div className="text-block-2-copy">({title})</div>
              <div className="text-block-2-copy">{title}</div>
            </motion.div>

            <motion.div className="inner-cube-marquee-rev">
              <div className="text-block-2-copy">({title})</div>
              <div className="text-block-2-copy">{title}</div>
            </motion.div>

            <motion.div className="inner-cube-marquee-rev">
              <div className="text-block-2-copy">({title})</div>
              <div className="text-block-2-copy">{title}</div>
            </motion.div>
          </div>

          <div className="cube-face-back l">
            <motion.div className="inner-cube-marquee-rev">
              <div className="text-block-2-copy">({title})</div>
              <div className="text-block-2-copy">{title}</div>
            </motion.div>

            <motion.div className="inner-cube-marquee-rev">
              <div className="text-block-2-copy">({title})</div>
              <div className="text-block-2-copy">{title}</div>
            </motion.div>

            <motion.div className="inner-cube-marquee-rev">
              <div className="text-block-2-copy">({title})</div>
              <div className="text-block-2-copy">{title}</div>
            </motion.div>
          </div>

          <div className="cube-face-4 l">
            <motion.div className="inner-cube-marquee">
              <div className="text-block-2-copy">{title}</div>
              <div className="text-block-2-copy">({title})</div>
            </motion.div>

            <motion.div className="inner-cube-marquee">
              <div className="text-block-2-copy">{title}</div>
              <div className="text-block-2-copy">({title})</div>
            </motion.div>

            <motion.div className="inner-cube-marquee">
              <div className="text-block-2-copy">{title}</div>
              <div className="text-block-2-copy">({title})</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="cube-wrapper-right l">
        <motion.div
          className="cube-wrapper-rev large"
          style={{
            rotateX: negativeRotateX,
          }}
        >
          <motion.div className="cube-face-front _2 l">
            <Image
              src={image}
              loading="lazy"
              // sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 80vw, 35vw"
              // srcSet="https://assets.website-files.com/5757450dbe901fd644024d5e/642da4506fe50b896638de64_clark-07-p-500.png 500w, https://assets.website-files.com/5757450dbe901fd644024d5e/642da4506fe50b896638de64_clark-07-p-800.png 800w, https://assets.website-files.com/5757450dbe901fd644024d5e/642da4506fe50b896638de64_clark-07.png 981w"
              alt=""
              className="cover-image-2"
            />
          </motion.div>

          <motion.div className="cube-face-2 red l">
            <Image
              src={image2}
              loading="lazy"
              // sizes="(max-width: 991px) 100vw, 35vw"
              // srcSet="https://assets.website-files.com/5757450dbe901fd644024d5e/642df70c12e074139dc02032_clark-11-p-500.jpg 500w, https://assets.website-files.com/5757450dbe901fd644024d5e/642df70c12e074139dc02032_clark-11-p-800.jpg 800w, https://assets.website-files.com/5757450dbe901fd644024d5e/642df70c12e074139dc02032_clark-11.jpg 981w"
              alt=""
              className="cover-image-2 flip"
            />
          </motion.div>

          <motion.div className="cube-face-back red l">
            <Image
              src={image}
              loading="lazy"
              // sizes="(max-width: 991px) 100vw, 35vw"
              // srcSet="https://assets.website-files.com/5757450dbe901fd644024d5e/642da4b08ca9fa6bba0ccd80_clark-08-p-500.png 500w, https://assets.website-files.com/5757450dbe901fd644024d5e/642da4b08ca9fa6bba0ccd80_clark-08-p-800.png 800w, https://assets.website-files.com/5757450dbe901fd644024d5e/642da4b08ca9fa6bba0ccd80_clark-08.png 981w"
              alt=""
              className="cover-image-2 flip"
            />
          </motion.div>

          <motion.div className="cube-face-4 red l">
            <Image
              src={image2}
              loading="lazy"
              // sizes="(max-width: 991px) 100vw, 35vw"
              // srcSet="https://assets.website-files.com/5757450dbe901fd644024d5e/642db08b32b532ddc005f005_clark-10-p-500.png 500w, https://assets.website-files.com/5757450dbe901fd644024d5e/642db08b32b532ddc005f005_clark-10-p-800.png 800w, https://assets.website-files.com/5757450dbe901fd644024d5e/642db08b32b532ddc005f005_clark-10.png 981w"
              alt=""
              className="cover-image-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

type CubeProps = {
  title: string;
  image: StaticImageData;
  image2: StaticImageData;
};
