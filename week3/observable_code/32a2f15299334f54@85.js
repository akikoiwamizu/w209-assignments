import define1 from "./1d7454812d4d25c2@60.js";

function _1(md){return(
md`# Week 3 Assignment

Please submit links for **all four tracks**.`
)}

function _2(md,observable_instructions){return(
md`## D3

This weeks assignment is to take [this observable](https://observablehq.com/d/339a961a1c087e42?collection=@berkeleyvis/scratchbooks) and change the circle to have radius 50, and be centered in the SVG (hint: use the \`cx\` and \`cy\` attributes).

${observable_instructions}.`
)}

function _3(md){return(
md`[Link to D3 notebook here.](observablehq.com/d/c48aa9970b027631)`
)}

function _4(md,observable_instructions){return(
md`## Vega-lite

This weeks assignment is to take [this observable](https://observablehq.com/d/623d7a48c782f5ee?collection=@berkeleyvis/scratchbooks) and change the circle size to be 50, and set the bar chart x scale to be logarithmic.

${observable_instructions}.`
)}

function _5(md){return(
md`[Link to Vega-Lite notebook here.](observablehq.com/d/3095ddb0e903a8e1)`
)}

function _6(md,altair_instructions){return(
md`## Altair

This weeks assignment is to take [this notebook](https://colab.research.google.com/drive/12gxCsUGhRg012s0DXTbP08V3XLVXsQfs?usp=sharing) and change the dataset from \`cars\` to any other dataset in \`vega_datasets\` (see list [here](https://github.com/altair-viz/vega_datasets/tree/master/vega_datasets/_data)) and make a scatterplot.

${altair_instructions}`
)}

function _7(md){return(
md`[Link to Altair notebook here.](https://colab.research.google.com/drive/133SUNb6XUWdIZqX5bTkP8CUnoUcOyyEW?usp=sharing)`
)}

async function _8(md,FileAttachment,tableau_instructions){return(
md`## Tableau

This weeks assignment starts with [this workbook](https://observablehq.com/d/5a54f49de003fc8e?collection=@berkeleyvis/scratchbooks). You can download that workbook from the embed in Observable: in the Observable notebook embed there is a download button in the bottom right (second button from the right): 

<img src="${await FileAttachment(
  "Screen Shot 2021-01-12 at 12.20.20 AM.png"
).url()}" width="240px">

Click the download button to download that workbook.

Group by city, sort by count, and color by year of the order date. It should look like this:

<figure>
  <img src="${await FileAttachment("tableau-assignment-3.png").url()}">
  <figcaption>Finished Tableau vis. Photo by Author</figcaption>
</figure>


${tableau_instructions}`
)}

function _9(md){return(
md`[Link to Tableau Public notebook here.](https://public.tableau.com/views/MIDSW209-Week3Assignment/Grouping?:language=en-GB&publish=yes&:display_count=n&:origin=viz_share_link)`
)}

function _10(md,peer_review_instructions){return(
md`# Peer Review Prompts

- Do the D3 and VL vis's appear correct?
- What dataset was used for Altair?
- For any of the tracks, were there differences in how you completed the assignment? If so, what did you learn?

${peer_review_instructions}`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["Screen Shot 2021-01-12 at 12.20.20 AM.png", {url: new URL("./files/30ab97a23a4761d1b2a2afbe753deb056bd50ba3da255790dff378ac99a111bae77d41c339796ff6dc9acbd425f8ac01c039c9638e5b6a3e8a2cbfae0365055e", import.meta.url), mimeType: "image/png", toString}],
    ["tableau-assignment-3.png", {url: new URL("./files/0116b72f5b927d2f304f4086b792bb3a4571e14cdab7147134cc2e36a01fc196219726070f2bdcafec1ce60439c7900f0e37c103b0822201abc220544cd2963e", import.meta.url), mimeType: "image/png", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md","observable_instructions"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md","observable_instructions"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md","altair_instructions"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md","FileAttachment","tableau_instructions"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md","peer_review_instructions"], _10);
  const child1 = runtime.module(define1);
  main.import("observable_instructions", child1);
  main.import("altair_instructions", child1);
  main.import("tableau_instructions", child1);
  main.import("peer_review_instructions", child1);
  return main;
}
