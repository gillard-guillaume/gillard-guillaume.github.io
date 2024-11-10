// src/components/SplashScreen.js
import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#1a1a1a", // Dark background color
      color: "#f5f5f5" // Light text color
    }}>
      {/* Work In Progress Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontSize: "3rem", marginBottom: "20px", color: "#f5f5f5" }}
      >
        Work in Progress
      </motion.h1>

      {/* Loading Spinner */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #333",
          borderTop: "5px solid #f5f5f5", // Light color for contrast
          borderRadius: "50%",
          marginTop: "20px"
        }}
      ></motion.div>

      {/* Subtext with Pulsing Animation */}
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ marginTop: "20px", fontSize: "1.2rem", color: "#c5c5c5" }}
      >
        Exciting things are coming soon!
      </motion.p>
    </div>
  );
}
