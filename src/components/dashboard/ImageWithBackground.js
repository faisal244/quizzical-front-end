import Box from "@mui/material/Box";

export const ImageWithBackground = ({ image }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};
