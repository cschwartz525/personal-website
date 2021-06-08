import React, { memo } from 'react';

type WorkHistoryProps = {
    data: {
        companyName: string;
        department: string;
        description: string;
        endDate: string;
        jobTitle: string;
        location: string;
        logo: string;
        projects: Array<string>;
        startDate: string;
        website: string;
    };
};

const WorkHistory = ({ data }: WorkHistoryProps): JSX.Element => {
    let projects: Array<JSX.Element> = [];

    if (data.projects) {
        projects = data.projects.map((project: string, index: number) => (
            <li key={index}>{project}</li>
        ));
    }

    return (
        <div className='work-history'>
            <div className='work-history__header'>
                <div className='left'>
                    <div>
                        {data.companyName}
                    </div>
                    <div>
                        {data.jobTitle}
                    </div>
                </div>
                <div className='right'>
                    <img className='company-logo' src={`../assets/images/${data.logo}`}></img>
                </div>
            </div>
            <div className='work-history__summary'>
                <div className='left'>
                    <div>
                        {data.department}
                    </div>
                    <div>
                        {data.location}
                    </div>
                    <div>
                        {data.startDate} - {data.endDate}
                    </div>
                    <div>
                        <a className='text-link' href={data.website}>
                            {data.website}
                        </a>
                    </div>
                </div>
                <div className='right'>
                    <p>
                        {data.description}
                    </p>
                    <ul>{projects}</ul>
                </div>
            </div>
        </div>
    );
};

export default memo(WorkHistory);
