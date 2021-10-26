import { up } from 'styled-breakpoints'
import styled from 'styled-components'

import { Position } from './Milestone'

export const MilestoneTitle = styled.h3<{
	small?: boolean
	position?: Position
}>`
	font-size: ${({ theme }) => theme.typo.size.heading3};
	font-weight: bold;

	margin-bottom: ${(props) =>
		props.small ? 'inherit' : props.theme.spacing(0.4)};

	text-align: center;

	color: ${(props) =>
		props.small
			? props.theme.palette.blueNassa
			: props.theme.palette.whiteNassa};

	${up('lg')} {
		text-align: ${(props) => props.position || 'left'};
	}
`

export const MilestoneDescription = styled.div`
	color: ${({ theme }) => theme.palette.lightBlueNassa};
	font-size: ${({ theme }) => theme.typo.size.detail};
`

export const MilestoneBase = styled.div<{ position: Position; height: number }>`
	padding: ${({ theme }) => theme.spacing(1)};
	border-radius: 4px;
	position: relative;
	width: 300px;

	${up('lg')} {
		padding: ${(props) =>
			props.position === 'right'
				? props.theme.spacing(1, 1, 1, 3)
				: props.theme.spacing(1, 3, 1, 1)};
	}
`

export const MilestoneSmall = styled(MilestoneBase)`
	background: ${({ theme }) => theme.palette.whiteNassa};
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};

	${up('lg')} {
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 20px 20px 20px 0;
			border-color: transparent ${({ theme }) => theme.palette.blueNassa}
				transparent transparent;
			left: ${(props) => (props.position === 'left' ? '-20px' : 'inherit')};
			right: ${(props) => (props.position === 'right' ? '-20px' : 'inherit')};
			bottom: 50%;
			transform: translateY(50%)
				${(props) => (props.position === 'right' ? 'rotate(180deg)' : '')};
		}
	}
`

export const MilestoneBig = styled(MilestoneBase)`
	background: ${({ theme }) => theme.palette.blueNassa};
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};

	${up('lg')} {
		&:after {
			content: '';
			display: inline-block;
			position: absolute;
			width: 30px;
			height: 4px;
			background-color: ${({ theme }) => theme.palette.blueNassa};
			left: ${(props) => (props.position === 'left' ? '-30px' : 'inherit')};
			right: ${(props) => (props.position === 'right' ? '-30px' : 'inherit')};
			bottom: 50%;
			transform: translateY(50%)
				${(props) => (props.position === 'right' ? 'rotate(180deg)' : '')};
		}
	}
`
