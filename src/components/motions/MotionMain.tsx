import * as motion from "motion/react-client";

const MotionMain = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 100 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
        mass: 1,
        duration: 0.2,
        delay: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};
export default MotionMain;
