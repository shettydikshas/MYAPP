import React from "react";

import Link from "../components/Link";

export default {
  title: "Example/Link",
  component: Link,
  backgroundColor: { control: 'color' },
};


const Template = ({ to,label }) => <Link to={to}>{label}</Link>;

export const Happy = Template.bind({});
Happy.args = {
  to: "http://www.reactiongifs.com/r/cheering_minions.gif",
  label:"Happy",
};

export const Sad = Template.bind({});
Sad.args = {
  to: "https://media.giphy.com/media/UqvyxmNFmoEocT0R9g/giphy.gif",
  label:"Sad", //
  
};
export const Sarcastic = Template.bind({});
Sarcastic.args = {
  to: "https://media.giphy.com/media/10I5e2yNnaozOo/giphy.gif",
  label:"Sarcastic",
};
export const Angry = Template.bind({});
Angry.args = {
  to: "https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif",
  label:"Angry",
};
