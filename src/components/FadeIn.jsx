import { useAnimate, useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

const FadeIn = ({children,dely,direction,fullwidth,padding}) => {
    const ref = useRef(null);

    const isInView = useInView(ref, {once: true});
    const controls = useAnimate();
    return (
        <div>
            <motion.div>
                {children}
            </motion.div>
        </div>
    );
};

export default FadeIn;