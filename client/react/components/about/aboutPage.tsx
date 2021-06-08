import React, { memo, useEffect, useState } from 'react';

const AboutPage = (): JSX.Element => {
    const [heading, setHeading] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        fetch('/api/about')
        .then(res => res.json())
        .then(data => {
            setHeading(data.heading);
            setSummary(data.summary);
        });
    }, []);

    return (
        <div id='main-content'>
            <h1 className='page-title'>{heading}</h1>
            <div className='page-content'>
                {
                    summary.map((line, index) => (
                        <p key={index} className='self-summary'>
                            {line}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default memo(AboutPage);
