import "./App.css";
import { Avatar, Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const animations = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={animations}
          initial="initial"
          animate="animate"
          exit={"exit"}
          transition={{ duration: 10 }}
        >
          <Button variant="contained" size="small">
            Button material UI
          </Button>
          <Avatar
            sx={{
              backgroundColor: "green",
            }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
