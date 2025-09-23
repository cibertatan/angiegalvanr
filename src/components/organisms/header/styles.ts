export const nav: React.CSSProperties = {
  position: "relative",
  overflow: "visible",
  width: 300,
  height: 370,
};

export const background: React.CSSProperties = {
  backgroundColor: "white",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: 250,
  zIndex: 100,
  borderBottomRightRadius: 20,
};

export const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 24,
  left: 28,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
  zIndex: 130,
};

export const list: React.CSSProperties = {
  listStyle: "none",
  paddingLeft: 25,
  paddingTop: 80,
  margin: 0,
  position: "absolute",
  top: 0,
  width: 230,
  zIndex: 130,
};

export const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 20,
  cursor: "pointer",
};