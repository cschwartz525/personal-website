import React, { memo } from 'react';
import AboutPage from './about/aboutPage';
import ContactPage from './contact/contactPage';
import ResumePage from './resume/resumePage';

type MainContainerProps = {
  selectedPanel: string;
};

const MainContainer = ({
    selectedPanel
}: MainContainerProps): JSX.Element => (
    <div id="main-container">
        {selectedPanel}
    </div>
);

export default memo(MainContainer);
