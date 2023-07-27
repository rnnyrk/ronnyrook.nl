import type * as i from 'types';
import { useEffect } from 'react';

// Masonry inspiration: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
export function useMasonaryGrid({ resources, type }: MasonaryGridProps) {
  function resizeGridItem(item: HTMLElement) {
    if (!item) return;

    const grid = document.getElementsByClassName('masonry-grid')[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil(
      (item.querySelector('.content')!.getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap),
    );
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  function resizeAllGridItems() {
    const allItems = document.getElementsByClassName(
      'masonary-card',
    ) as HTMLCollectionOf<HTMLElement>;
    for (let x = 0; x < allItems.length; x++) {
      resizeGridItem(allItems[x]);
    }
  }

  useEffect(() => {
    if (type !== 'tweets') return;

    window.addEventListener('resize', resizeAllGridItems);
    return () => {
      window.removeEventListener('resize', resizeAllGridItems);
    };
  }, []);

  useEffect(() => {
    if (type !== 'tweets') return;
    setTimeout(() => {
      resizeAllGridItems();
    }, 500);
  }, [resources]);
}

type MasonaryGridProps = {
  resources: i.ResourcesList;
  type: i.ResourcesKeys;
};
