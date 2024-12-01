import React, { useRef } from 'react';
import useMeasure from 'react-use-measure';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const HorizontalScroll: React.FC<Props> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [contentRef, bounds] = useMeasure();
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -bounds.width + window.innerWidth]
  );

  return (
    <div ref={scrollRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="flex items-center h-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};