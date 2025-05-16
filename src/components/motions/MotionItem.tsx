import * as motion from "motion/react-client";

const MotionItem = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};
export default MotionItem;
