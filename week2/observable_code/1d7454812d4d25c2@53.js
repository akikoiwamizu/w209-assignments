// https://observablehq.com/@berkeleyvis/how-to-submit-assignments@53
function _1(md,observable_instructions,altair_instructions,tableau_instructions){return(
md`# How to submit assignments



### Observable (D3 & VL)

${observable_instructions}

### Altair

${altair_instructions}

### Tableau

${tableau_instructions}`
)}

function _2(md,peer_review_instructions){return(
md`# Peer Reviews

${peer_review_instructions}`
)}

function _observable_instructions(submit_together){return(
`To fork a notebook, click the "_fork_" button ([see more detailed instructions here](https://observablehq.com/@observablehq/fork-share-merge)) near the top of the page. 

When you submit the link, make sure to grant access to both your section instructor and your peer reviewer via Share button, and only those two. Do not "publish" your submission, which would make your submission viewable to the whole course or public (so others can\'t copy your work!). 

${submit_together}.`
)}

function _altair_instructions(submit_together){return(
`When you create the shared link to your notebook, make the notebook unlisted (not searchable) and veiwable for both your peer reviewer and your section instructor with the link. To do this: 

1. Click on "_Share_" and copy the link.  
2. You can set the permissions to "_Anyone on the internet with this link can view_" or "_Anyone at UC Berkeley_". Again, "unlisted" so others cannot copy your work, but viewable for those with the link so your instructor can review and your peers can offer feedback. 

${submit_together}.`
)}

function _tableau_instructions(submit_together){return(
`To create the shared link, publish your visualization the Tableau Public (note: this is separate from Tableau online). No special sharing permissions are necessary.

${submit_together}`
)}

function _peer_review_instructions(){return(
"Respond to the peer review prompts on the submission of assigned peer reviewee in the ISVC forum. The ISVC forum for this weeks assignment can be accessed via Coursework -> Assessments -> Unit _N_ Assignment."
)}

function _submit_together(){return(
`Submit all of your links together in one post on the ISVC forum for this weeks assignment (Coursework -> Assessments -> Unit N Assignment -> Create New Post).`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md","observable_instructions","altair_instructions","tableau_instructions"], _1);
  main.variable(observer()).define(["md","peer_review_instructions"], _2);
  main.variable(observer("observable_instructions")).define("observable_instructions", ["submit_together"], _observable_instructions);
  main.variable(observer("altair_instructions")).define("altair_instructions", ["submit_together"], _altair_instructions);
  main.variable(observer("tableau_instructions")).define("tableau_instructions", ["submit_together"], _tableau_instructions);
  main.variable(observer("peer_review_instructions")).define("peer_review_instructions", _peer_review_instructions);
  main.variable(observer("submit_together")).define("submit_together", _submit_together);
  return main;
}
