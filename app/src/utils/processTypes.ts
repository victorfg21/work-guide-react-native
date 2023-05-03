export interface Process {
    title: string
    intervention: string
    validation: string
    observation: string
    items: Item[]
}

export interface Item {
    sequence: number
    equipment: string
    tag: string
    action: string
    energyInvolved: string
    checked: boolean
}
