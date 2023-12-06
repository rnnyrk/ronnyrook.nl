'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import { FrozenRoute } from './FrozenRoute';

// We use `motion.div` as the first child of `<AnimatePresence />` Component so we can specify page animations at the page level.
// The `motion.div` Component gets re-evaluated when the `key` prop updates, triggering the animation's lifecycles.
// During this re-evaluation, the `<FrozenRoute />` Component also gets updated with the new route components.

export function PageWrapper({ children }: React.PropsWithChildren) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
}
