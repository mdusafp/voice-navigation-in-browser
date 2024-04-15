import { Variants, motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

interface IMicrophoneButtonProps {
  onClick: () => void
}

const BUTTON_SIZE = '100px'

export const Microphone: FC<IMicrophoneButtonProps> = ({
  onClick,
}) => {
  const icon: Variants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <MicrophoneButtonBox onClick={onClick}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          height={BUTTON_SIZE}
          width={BUTTON_SIZE}
          version="1.1"
          viewBox="0 0 512 512"
        >
          <motion.path
            d="m439.5,236c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,70-64,126.9-142.7,126.9-78.7,0-142.7-56.9-142.7-126.9 0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4c0,86.2 71.5,157.4 163.1,166.7v57.5h-23.6c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h88c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23.6v-57.5c91.6-9.3 163.1-80.5 163.1-166.7z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
          <motion.path
            d="m256,323.5c51,0 92.3-41.3 92.3-92.3v-127.9c0-51-41.3-92.3-92.3-92.3s-92.3,41.3-92.3,92.3v127.9c0,51 41.3,92.3 92.3,92.3zm-52.3-220.2c0-28.8 23.5-52.3 52.3-52.3s52.3,23.5 52.3,52.3v127.9c0,28.8-23.5,52.3-52.3,52.3s-52.3-23.5-52.3-52.3v-127.9z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
          />
        </motion.svg>
      </MicrophoneButtonBox>
    </motion.div>
  )
};

const MicrophoneButtonBox = styled.div`
  cursor: pointer;
  height: ${BUTTON_SIZE};
  width: ${BUTTON_SIZE};
  display: flex;
  place-content: center;
  overflow: hidden;
  background: var(--iris-a3);
  border-radius: 30px;

  svg {
    width: 56%;
    overflow: visible;
    stroke: var(--white-a11);
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }

  &:hover {
    background-color: var(--iris-a7);
  }
`
