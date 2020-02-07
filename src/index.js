import grapesjs from "grapesjs";
import basicBlocks from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import "./styles.css";

// Plugins
//import Collection from "./plugins/Collection";

import sectors from "./sectors";

var editor = grapesjs.init({
  container: "#app",
  fromElement: true,
  dragMode: "translate",
  styleManager: {
    clearProperties: 1,
    sectors: sectors
  },
  plugins: [basicBlocks]
});

editor.on("component:selected", function(model) {
  const componentType = model.get("type");
  const sm = editor.StyleManager;
  const pfx = sm.getConfig().stylePrefix;
  const fontSector = document.getElementById(`${pfx}font`);
  if (componentType === "text") {
    fontSector.classList.add("active");
  } else {
    fontSector.classList.remove("active");
  }
  model.set("resizable", true);
});
