import React from 'react'
import styled from 'styled-components'

import { useMilestoneStore } from 'app/store/useMilestoneStore'

import { Header } from 'components/milestones/Header'
import { MilestoneContainer } from 'components/milestones/MilestoneContainer'

const Milestones = (): JSX.Element => {
	const { map } = useMilestoneStore()

	const SuccessView = () => {
		return (
			<Base>
				<Header />
				<MilestoneSection>
					{map &&
						map['nassa-onu'].map((milestone, idx) => (
							<MilestoneSmall
								position={idx % 2 === 0 ? 'right' : 'left'}
								key={milestone.date}
							>
								{milestone.title}
							</MilestoneSmall>
						))}
				</MilestoneSection>
			</Base>
		)
	}

	return (
		<MilestoneContainer>
			<SuccessView />
		</MilestoneContainer>
	)
}

export default Milestones

const Base = styled.main`
	display: flex;
	flex-direction: column;
`

const MilestoneSection = styled.section`
	margin-top: ${({ theme }) => theme.spacing(-1)};
	display: flex;
	flex-direction: column;
	align-items: center;
`

const MilestoneSmall = styled.div<{ position: 'left' | 'right' }>`
	/* width: 300px; */
	margin-bottom: ${({ theme }) => theme.spacing(2)};
	margin-left: ${(props) => (props.position === 'left' ? '-300px' : '300px')};
	padding: ${(props) =>
		props.position === 'left'
			? props.theme.spacing(1, 1, 1, 3)
			: props.theme.spacing(1, 3, 1, 1)};
	background: transparent;
	border: 4px solid ${({ theme }) => theme.palette.blueNassa};
	border-radius: 4px;
`
