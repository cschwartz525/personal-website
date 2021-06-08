import React, { memo } from 'react';

type SkillProps = {
    name: string;
};

const Skill = ({ name }: SkillProps): JSX.Element => (
    <div className='skill no-select'>
        {name}
    </div>
);

export default memo(Skill);
