import React, { memo } from 'react';

type EducationProps = {
    data: {
        degree: string;
        logo: string;
        major: string;
        name: string;
        website: string;
        year: string;
    }
};

const Education = ({ data }: EducationProps): JSX.Element => (
    <div className='education-history'>
        <div className='education-history__header'>
            <div className='left'>
                <div>{data.name}</div>
                    <div>Class of {data.year}</div>
                </div>
                <div className='right'>
                <img className='company-logo' src={`../assets/images/${data.logo}`}></img>
            </div>
        </div>

        <div className='education-history__summary'>
            <div className='left'>
            <div>
                {data.degree}
            </div>
            <div>
                {data.major}
            </div>
            <div>
                <a className='text-link' href={data.website}>
                    {data.website}
                </a>
            </div>
            </div>
            <div className='right'>
                <p>
                </p>
            </div>
        </div>
    </div>
);

export default memo(Education);
