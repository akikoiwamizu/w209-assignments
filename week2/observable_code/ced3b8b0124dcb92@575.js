import define1 from "./1d7454812d4d25c2@53.js";

function _1(md){return(
md`# Week 2 Assignment

Please complete and submit links to ISVC for **each of the three tracks** (note, D3 and VL are combined).

For \`D3 & Vega-lite\` and \`Altair\` sections, we want you to focus on getting familiar with reading and aggregating the data using the APIs. 
You are welcome to create visualizations, but it is only required for the \`Tableau\` section.`
)}

function _2(md,observable_instructions){return(
md`## D3 & Vega-lite

This weeks assignment is to take the attached dataset here, group by nationality, count the number of players and the average age. You can fork this notebook and work here directly.

${observable_instructions}.

File attachment code, so it will come with the fork:`
)}

function _data(FileAttachment){return(
FileAttachment("players_20.csv").csv()
)}

function _4(Inputs,data){return(
Inputs.table(data)
)}

function _rollupByNationality(d3,data){return(
d3.rollup(
  data,
  v => ({
    numPlayers: v.length,
    avgAge: d3.mean(v, d => d.age).toFixed(2)
  }),
  d => d.nationality
)
)}

function _6(html,rollupByNationality){return(
html`<table>
  <thead>
    <tr><th>Nationality</th><th>Number of Players</th><th>Average Age</th></tr>
  </thead>
  <tbody>${Array.from(rollupByNationality, ([key, values]) => html`
    <tr>
      <td>${key}</td>
      <td>${values.numPlayers}</td>
      <td>${values.avgAge}</td>
    </tr>`)}</tbody>
</table>`
)}

function _7(md,altair_instructions){return(
md`## Altair

This weeks assignment is to take the dataset attached above, and using Pandas group by nationality, count the number of players and average age. Submit the link to the Google Collaboratory notebook.
[Here is a notebook to start from](https://colab.research.google.com/drive/12uAnzjxUjZBWnbkarmHX9dH7Np8XcXVG?usp=sharing).

You can upload the data (you downloaded from Observable) to your Google Collab workspace by running:

\`\`\`
from google.colab import files
files.upload()
\`\`\`

which will prompt you to upload the data file to your workspace. You can then read in the file:

\`\`\`
df = pd.read_csv("/content/players_20.csv")
df.head()
\`\`\`

The data goes away when the runtime shuts down, but the plots should still be there from altair.

${altair_instructions}`
)}

function _8(md){return(
md`<a href="https://colab.research.google.com/drive/1mhB0CvEVYtPPp03u30-qeeq4Sbdi9PmN?usp=sharing">Link to Google Colab notebook here.</a>`
)}

function _9(md,tableau_instructions){return(
md`## Tableau

This weeks assignment is to take the dataset attached above, and show a table of counts of players by nationality along with average age. Submit the Tableau Public or Observable link to your vis (you can embed Tableau Public into Observable [like this](https://observablehq.com/d/5a54f49de003fc8e?collection=@berkeleyvis/scratchbooks)).

${tableau_instructions}`
)}

function* _10(html)
{
  const target = html`<div class='tableauPlaceholder' id='viz1652013953786' style='position: relative'>
  <noscript>
  <a href='#'><img alt='Summary Stats by Nationality ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;MI&#47;MIDSW209-Week2Assignment&#47;Sheet1&#47;1_rss.png' style='border: none' />
  </a>
  </noscript>
  <object class='tableauViz'  style='display:none;'>
  <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> 
  <param name='site_root' value='' />
  <param name='name' value='MIDSW209-Week2Assignment&#47;Sheet1' />
  <param name='tabs' value='no' /><param name='toolbar' value='yes' />
  <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;MI&#47;MIDSW209-Week2Assignment&#47;Sheet1&#47;1.png' /> 
  <param name='animate_transition' value='yes' />
  <param name='display_static_image' value='yes' />
  <param name='display_spinner' value='yes' />
  <param name='display_overlay' value='yes' /><param name='display_count' value='yes' />
  <param name='language' value='en-US' />
  <param name='filter' value='publish=yes' />
  </object>
  </div>`;

  // Return the div first so the following code can find it
  yield target;
  var divElement = document.getElementById("viz1652013953786");
  var vizElement = divElement.getElementsByTagName("object")[0];
  vizElement.style.width = "100%";
  vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
  var scriptElement = document.createElement("script");
  scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(scriptElement, vizElement);
}


function _11(md,peer_review_instructions){return(
md`# Peer Review Prompts

Just one question prompt this week:

- Does the aggregation in each tool appear correct?

${peer_review_instructions}`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["players_20.csv", {url: new URL("./files/14a345c239a2b7b1e171d0819bdfb71d46de5710f8f6f0d7329a60070da71ec3668b6705dfceee2ed21a467afc6bccf223ecfb1c3f7a10399695452367d560b8", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md","observable_instructions"], _2);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  main.variable(observer()).define(["Inputs","data"], _4);
  main.variable(observer("rollupByNationality")).define("rollupByNationality", ["d3","data"], _rollupByNationality);
  main.variable(observer()).define(["html","rollupByNationality"], _6);
  main.variable(observer()).define(["md","altair_instructions"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer()).define(["md","tableau_instructions"], _9);
  main.variable(observer()).define(["html"], _10);
  main.variable(observer()).define(["md","peer_review_instructions"], _11);
  const child1 = runtime.module(define1);
  main.import("observable_instructions", child1);
  main.import("altair_instructions", child1);
  main.import("tableau_instructions", child1);
  main.import("peer_review_instructions", child1);
  return main;
}
