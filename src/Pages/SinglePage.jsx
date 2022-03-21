import React from 'react';
import { useParams } from 'react-router-dom';

function SinglePage() {
  const aboutData = [
    {
      common: 'about-app',
      title: 'About the App',
      description:
        'In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.',
    },
    {
      common: 'about-author',
      title: 'About the Author',
      description:
        'This app was refactored by Mengistu F., a Micorverse Student. The app is developed following the woderful tutorial by Ibas Majid, a self-taught web developer and a technical writer.',
    },
  ];
  const { common } = useParams();
  const aboutContent = aboutData.find((item) => item.common === common);
  const { title, description } = aboutContent;
  return (
    <div className="main-content">
      <h1 className="about-heading">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export default SinglePage;
