export interface IProcessData {
    title: string
    intervention: string
    validation: string
    observation: string
    items: IItemData[]
}

export interface IItemData {
    sequence: number
    equipment: string
    tag: string
    action: string
    energyInvolved: string
    checked: boolean
}
