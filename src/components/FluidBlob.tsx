import { motion } from 'framer-motion';

const FluidBlob = ({ state }) => {
  const variants = {
    idle: { 
      d: "M30.5,19C47.9,-2.2,62.7,10.3,63,27.1C63.5,47.5,50.7,52.8,39,44C28.3,36.4,18.8,47.3,10.3,40.5C5.5,36.6,-0.5,29.5,0.2,22C1.4,6.4,19.9,2,30.5,19Z",
      fill: '#f00',
    },
    listening: {
      d: "M30.5,0C46.7,-23,68,-7.6,64,20C66.5,41.5,67,43,48,36C31,29,28.3,20.2,15.5,19C4.6,17.8,0.1,25.6,0,37C0,50,15,57,30.5,38C46,19,47,-6,30.5,0Z",
      fill: '#0f0',
    },
    processing: {
      d: "M30.5,0C44,-24,70,-5,63,25C66.5,53.5,48,43,39,40.7C28,37.4,16,47,11,39C9,34,6,25,0,25C-5,25,-1,32,0,30C2,26,5,30,10,35C16,41,22,42,30.5,26C39,10,38,-10,30.5,0Z",
      fill: '#00f',
    },
  };

  return (
    <motion.svg width="100%" height="100%" viewBox="0 0 64 64">
      <motion.path
        variants={variants}
        animate={state}
        transition={{ duration: 1 }}
      />
    </motion.svg>
  );
};

export default FluidBlob;