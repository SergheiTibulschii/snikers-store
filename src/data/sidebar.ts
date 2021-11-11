export interface ISidebarItem {
    text: string
    value: string
}
export type SidebarItemType = 'shoes'
export const sidebarItems: Record<SidebarItemType, ISidebarItem[]> = {
    shoes: [
        { text: 'Lifestyle', value: 'lifestyle' },
        { text: 'Jordan', value: 'jordan' },
        { text: 'Running', value: 'running' },
        { text: 'Basketball', value: 'basketball' },
        { text: 'Training & Gym', value: 'training_and_gym' },
        { text: 'Football', value: 'football' },
        { text: 'Skateboarding', value: 'skateboarding' },
        { text: 'American Football', value: 'american_football' },
        { text: 'Baseball', value: 'baseball' },
        { text: 'Golf', value: 'golf' },
        { text: 'Tennis', value: 'tennis' },
        { text: 'Walking', value: 'walking' },
    ],
}
