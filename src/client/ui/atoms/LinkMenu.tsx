import * as React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { lightColor } from '@ui/theme';

const StyledLink = styled.span`
    color: #fff;
    text-decoration: none;
    transition: 0.32s;
    white-space: nowrap;
    
    &:hover {
        color: #fff;
    }
    
    &:before {
        transition: 0.32s;
    }
    
    &:hover {
        color: ${lightColor};
        &:before {
            color: ${lightColor};
        }
    }
    
`;

interface IProps extends NavLinkProps {
	isOpen?: boolean;
	text: string;
	icon: string;
}

const LinkMenu: React.SFC<IProps> = (props: IProps) => {
	const { to, isOpen, text, icon }: IProps = props;
	return (
		<NavLink to={to} className={'alt-nav-link'} activeClassName="alt-nav-link_active">
			{isOpen
				? (<StyledLink className={`mdi mdi-${icon}`}>{text}</StyledLink>)
				: (<div>
					<StyledLink className={`mdi mdi-${icon}`}>{}</StyledLink>
				</div>)
			}
		</NavLink>
	);
};

export default LinkMenu;
