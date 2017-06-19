import s from "./styles.css";
import Smart1 from "../smart1";
import Smart2 from "../smart2";

export default function App() {
  return `<!DOCTYPE html>
    <html>
    <head>
        <title>NC CSS Modules PoC</title>
        <link rel="stylesheet" href="global-styles/global.css">
        <link rel="stylesheet" href="build/style.css">
    </head>
    <body>
      <div class=${s.wrapper}>
        <h1 class="global-styles">Main page</h1>
        
        ${Smart1()}
        <br />
        ${Smart2()}
      </div>
    </body>
    </html>`;
}
