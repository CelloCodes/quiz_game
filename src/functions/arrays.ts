export function shuffle(array: any[]): any[] {
    return array
        .map(value => ({ value, index: Math.random() }))
        .sort((obj1, obj2) => obj1.index - obj2.index)
        .map(obj => obj.value)
}