import {
	NassaObj,
	MilestoneNassa,
	MilestonesCollection
} from 'app/shared/types'
import { getUniques } from 'app/utils/getUniques'

export const mapMilestones = (
	content: MilestonesCollection
): MilestoneNassa => {
	const map: MilestoneNassa = {}

	content.items
		.map((milestone) => {
			return {
				nassa: milestone.fields.nassa[0].fields.id,
				title: milestone.fields.title,
				description: milestone.fields.description,
				date: milestone.fields.date
			}
		})
		.forEach((mapped) => {
			const toAdd = {
				title: mapped.title,
				description: mapped.description,
				date: mapped.date
			}

			if (map[mapped.nassa]) map[mapped.nassa].push(toAdd)
			else map[mapped.nassa] = [toAdd]
		})

	return map
}

export const mapNassaList = (
	milestones: MilestonesCollection
): Array<NassaObj> => {
	const mapNassa: Array<NassaObj> = milestones.items.map((milestone) => {
		const id = milestone.fields.nassa[0].fields.id
		return {
			id: id,
			name: milestone.fields.nassa[0].fields.name
		}
	})

	const uniques = getUniques<NassaObj>(mapNassa, 'id').reverse()

	return uniques
}
